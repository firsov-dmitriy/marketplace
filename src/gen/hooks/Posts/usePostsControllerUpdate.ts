import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type {
  PostsControllerUpdateMutationRequest,
  PostsControllerUpdateMutationResponse,
  PostsControllerUpdatePathParams,
} from '../../types/PostsControllerUpdate.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const postsControllerUpdateMutationKey = () => [{ url: '/api/posts/{id}' }] as const

export type PostsControllerUpdateMutationKey = ReturnType<typeof postsControllerUpdateMutationKey>

/**
 * {@link /api/posts/:id}
 */
async function postsControllerUpdate(
  id: PostsControllerUpdatePathParams['id'],
  data?: PostsControllerUpdateMutationRequest,
  config: Partial<RequestConfig<PostsControllerUpdateMutationRequest>> = {},
) {
  const res = await client<PostsControllerUpdateMutationResponse, Error, PostsControllerUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/posts/${id}`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/posts/:id}
 */
export function usePostsControllerUpdate(
  options: {
    mutation?: UseMutationOptions<
      PostsControllerUpdateMutationResponse,
      Error,
      { id: PostsControllerUpdatePathParams['id']; data?: PostsControllerUpdateMutationRequest }
    >
    client?: Partial<RequestConfig<PostsControllerUpdateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postsControllerUpdateMutationKey()

  return useMutation<PostsControllerUpdateMutationResponse, Error, { id: PostsControllerUpdatePathParams['id']; data?: PostsControllerUpdateMutationRequest }>({
    mutationFn: async ({ id, data }) => {
      return postsControllerUpdate(id, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}