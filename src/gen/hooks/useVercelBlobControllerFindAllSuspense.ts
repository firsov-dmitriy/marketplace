import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerFindAllQueryResponse } from '../types/VercelBlobControllerFindAll.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const vercelBlobControllerFindAllSuspenseQueryKey = () => [{ url: '/api/vercel-blob' }] as const

export type VercelBlobControllerFindAllSuspenseQueryKey = ReturnType<typeof vercelBlobControllerFindAllSuspenseQueryKey>

/**
 * {@link /api/vercel-blob}
 */
async function vercelBlobControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob`, ...config })
  return res.data
}

export function vercelBlobControllerFindAllSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = vercelBlobControllerFindAllSuspenseQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return vercelBlobControllerFindAll(config)
    },
  })
}

/**
 * {@link /api/vercel-blob}
 */
export function useVercelBlobControllerFindAllSuspense<
  TData = VercelBlobControllerFindAllQueryResponse,
  TQueryData = VercelBlobControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = VercelBlobControllerFindAllSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<VercelBlobControllerFindAllQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? vercelBlobControllerFindAllSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(vercelBlobControllerFindAllSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}