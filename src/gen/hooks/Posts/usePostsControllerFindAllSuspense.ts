import client from '@/axiosClient.ts'
import type { PostsControllerFindAllQueryResponse } from '../../types/PostsControllerFindAll.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const postsControllerFindAllSuspenseQueryKey = () => [{ url: '/api/posts' }] as const

export type PostsControllerFindAllSuspenseQueryKey = ReturnType<typeof postsControllerFindAllSuspenseQueryKey>

/**
 * {@link /api/posts}
 */
async function postsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts`, ...config })
  return res.data
}

export function postsControllerFindAllSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = postsControllerFindAllSuspenseQueryKey()
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
export function usePostsControllerFindAllSuspense<
  TData = PostsControllerFindAllQueryResponse,
  TQueryData = PostsControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = PostsControllerFindAllSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<PostsControllerFindAllQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? postsControllerFindAllSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(postsControllerFindAllSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}