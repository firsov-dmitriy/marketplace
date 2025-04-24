import client from '@/axiosClient.ts'
import type { FilesControllerFindAllQueryResponse } from '../../types/FilesControllerFindAll.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const filesControllerFindAllSuspenseQueryKey = () => [{ url: '/api/files' }] as const

export type FilesControllerFindAllSuspenseQueryKey = ReturnType<typeof filesControllerFindAllSuspenseQueryKey>

/**
 * {@link /api/files}
 */
async function filesControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<FilesControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/files`, ...config })
  return res.data
}

export function filesControllerFindAllSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = filesControllerFindAllSuspenseQueryKey()
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
export function useFilesControllerFindAllSuspense<
  TData = FilesControllerFindAllQueryResponse,
  TQueryData = FilesControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = FilesControllerFindAllSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<FilesControllerFindAllQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? filesControllerFindAllSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(filesControllerFindAllSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}