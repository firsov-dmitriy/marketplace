import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerFindAllQueryResponse } from '../types/VercelBlobControllerFindAll.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const vercelBlobControllerFindAllQueryKey = () => [{ url: '/api/vercel-blob' }] as const

export type VercelBlobControllerFindAllQueryKey = ReturnType<typeof vercelBlobControllerFindAllQueryKey>

/**
 * {@link /api/vercel-blob}
 */
async function vercelBlobControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob`, ...config })
  return res.data
}

export function vercelBlobControllerFindAllQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = vercelBlobControllerFindAllQueryKey()
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
export function useVercelBlobControllerFindAll<
  TData = VercelBlobControllerFindAllQueryResponse,
  TQueryData = VercelBlobControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = VercelBlobControllerFindAllQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<VercelBlobControllerFindAllQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? vercelBlobControllerFindAllQueryKey()

  const query = useQuery({
    ...(vercelBlobControllerFindAllQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}