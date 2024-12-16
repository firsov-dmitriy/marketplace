import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerFindOneQueryResponse, VercelBlobControllerFindOnePathParams } from '../types/VercelBlobControllerFindOne.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const vercelBlobControllerFindOneSuspenseQueryKey = (id: VercelBlobControllerFindOnePathParams['id']) =>
  [{ url: '/api/vercel-blob/:id', params: { id: id } }] as const

export type VercelBlobControllerFindOneSuspenseQueryKey = ReturnType<typeof vercelBlobControllerFindOneSuspenseQueryKey>

/**
 * {@link /api/vercel-blob/:id}
 */
async function vercelBlobControllerFindOne(id: VercelBlobControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob/${id}`, ...config })
  return res.data
}

export function vercelBlobControllerFindOneSuspenseQueryOptions(id: VercelBlobControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = vercelBlobControllerFindOneSuspenseQueryKey(id)
  return queryOptions({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return vercelBlobControllerFindOne(id, config)
    },
  })
}

/**
 * {@link /api/vercel-blob/:id}
 */
export function useVercelBlobControllerFindOneSuspense<
  TData = VercelBlobControllerFindOneQueryResponse,
  TQueryData = VercelBlobControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = VercelBlobControllerFindOneSuspenseQueryKey,
>(
  id: VercelBlobControllerFindOnePathParams['id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<VercelBlobControllerFindOneQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? vercelBlobControllerFindOneSuspenseQueryKey(id)

  const query = useSuspenseQuery({
    ...(vercelBlobControllerFindOneSuspenseQueryOptions(id, config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}