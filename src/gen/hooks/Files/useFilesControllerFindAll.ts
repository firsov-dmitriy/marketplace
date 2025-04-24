import client from '@/axiosClient.ts'
import type { FilesControllerFindAllQueryResponse } from '../../types/FilesControllerFindAll.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const filesControllerFindAllQueryKey = () => [{ url: '/api/files' }] as const

export type FilesControllerFindAllQueryKey = ReturnType<typeof filesControllerFindAllQueryKey>

/**
 * {@link /api/files}
 */
async function filesControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<FilesControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/files`, ...config })
  return res.data
}

export function filesControllerFindAllQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = filesControllerFindAllQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return filesControllerFindAll(config)
    },
  })
}

/**
 * {@link /api/files}
 */
export function useFilesControllerFindAll<
  TData = FilesControllerFindAllQueryResponse,
  TQueryData = FilesControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = FilesControllerFindAllQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<FilesControllerFindAllQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? filesControllerFindAllQueryKey()

  const query = useQuery({
    ...(filesControllerFindAllQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}