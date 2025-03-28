import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { PostsControllerFindAllQueryResponse } from '../../types/PostsControllerFindAll.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const postsControllerFindAllQueryKey = () => [{ url: '/api/posts' }] as const

export type PostsControllerFindAllQueryKey = ReturnType<typeof postsControllerFindAllQueryKey>

/**
 * {@link /api/posts}
 */
async function postsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts`, ...config })
  return res.data
}

export function postsControllerFindAllQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = postsControllerFindAllQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return postsControllerFindAll(config)
    },
  })
}

/**
 * {@link /api/posts}
 */
export function usePostsControllerFindAll<
  TData = PostsControllerFindAllQueryResponse,
  TQueryData = PostsControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = PostsControllerFindAllQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<PostsControllerFindAllQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? postsControllerFindAllQueryKey()

  const query = useQuery({
    ...(postsControllerFindAllQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}