import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerFindOneQueryResponse, VercelBlobControllerFindOnePathParams } from '../types/VercelBlobControllerFindOne.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const vercelBlobControllerFindOneQueryKey = (id: VercelBlobControllerFindOnePathParams['id']) =>
  [{ url: '/api/vercel-blob/:id', params: { id: id } }] as const

export type VercelBlobControllerFindOneQueryKey = ReturnType<typeof vercelBlobControllerFindOneQueryKey>

/**
 * {@link /api/vercel-blob/:id}
 */
async function vercelBlobControllerFindOne(id: VercelBlobControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob/${id}`, ...config })
  return res.data
}

export function vercelBlobControllerFindOneQueryOptions(id: VercelBlobControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = vercelBlobControllerFindOneQueryKey(id)
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
export function useVercelBlobControllerFindOne<
  TData = VercelBlobControllerFindOneQueryResponse,
  TQueryData = VercelBlobControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = VercelBlobControllerFindOneQueryKey,
>(
  id: VercelBlobControllerFindOnePathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<VercelBlobControllerFindOneQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? vercelBlobControllerFindOneQueryKey(id)

  const query = useQuery({
    ...(vercelBlobControllerFindOneQueryOptions(id, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}