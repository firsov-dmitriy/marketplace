import client from '@/axiosClient.ts'
import type { PostsControllerFindOneQueryResponse, PostsControllerFindOnePathParams } from '../../types/PostsControllerFindOne.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const postsControllerFindOneSuspenseQueryKey = (id: PostsControllerFindOnePathParams['id']) => [{ url: '/api/posts/:id', params: { id: id } }] as const

export type PostsControllerFindOneSuspenseQueryKey = ReturnType<typeof postsControllerFindOneSuspenseQueryKey>

/**
 * {@link /api/posts/:id}
 */
async function postsControllerFindOne(id: PostsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts/${id}`, ...config })
  return res.data
}

export function postsControllerFindOneSuspenseQueryOptions(id: PostsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = postsControllerFindOneSuspenseQueryKey(id)
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
export function usePostsControllerFindOneSuspense<
  TData = PostsControllerFindOneQueryResponse,
  TQueryData = PostsControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = PostsControllerFindOneSuspenseQueryKey,
>(
  id: PostsControllerFindOnePathParams['id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<PostsControllerFindOneQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? postsControllerFindOneSuspenseQueryKey(id)

  const query = useSuspenseQuery({
    ...(postsControllerFindOneSuspenseQueryOptions(id, config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}