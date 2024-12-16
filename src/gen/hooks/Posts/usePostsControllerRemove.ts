import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { PostsControllerRemoveMutationResponse, PostsControllerRemovePathParams } from '../../types/PostsControllerRemove.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const postsControllerRemoveMutationKey = () => [{ url: '/api/posts/{id}' }] as const

export type PostsControllerRemoveMutationKey = ReturnType<typeof postsControllerRemoveMutationKey>

/**
 * {@link /api/posts/:id}
 */
async function postsControllerRemove(id: PostsControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/posts/${id}`, ...config })
  return res.data
}

/**
 * {@link /api/posts/:id}
 */
export function usePostsControllerRemove(
  options: {
    mutation?: UseMutationOptions<PostsControllerRemoveMutationResponse, Error, { id: PostsControllerRemovePathParams['id'] }>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postsControllerRemoveMutationKey()

  return useMutation<PostsControllerRemoveMutationResponse, Error, { id: PostsControllerRemovePathParams['id'] }>({
    mutationFn: async ({ id }) => {
      return postsControllerRemove(id, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}