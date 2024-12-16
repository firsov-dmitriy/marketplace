import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { PostsControllerFindOneQueryResponse, PostsControllerFindOnePathParams } from '../../types/PostsControllerFindOne.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const postsControllerFindOneQueryKey = (id: PostsControllerFindOnePathParams['id']) => [{ url: '/api/posts/:id', params: { id: id } }] as const

export type PostsControllerFindOneQueryKey = ReturnType<typeof postsControllerFindOneQueryKey>

/**
 * {@link /api/posts/:id}
 */
async function postsControllerFindOne(id: PostsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts/${id}`, ...config })
  return res.data
}

export function postsControllerFindOneQueryOptions(id: PostsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = postsControllerFindOneQueryKey(id)
  return queryOptions({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return postsControllerFindOne(id, config)
    },
  })
}

/**
 * {@link /api/posts/:id}
 */
export function usePostsControllerFindOne<
  TData = PostsControllerFindOneQueryResponse,
  TQueryData = PostsControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = PostsControllerFindOneQueryKey,
>(
  id: PostsControllerFindOnePathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<PostsControllerFindOneQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? postsControllerFindOneQueryKey(id)

  const query = useQuery({
    ...(postsControllerFindOneQueryOptions(id, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}