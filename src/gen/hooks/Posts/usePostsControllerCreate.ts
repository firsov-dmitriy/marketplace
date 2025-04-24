import client from '@/axiosClient.ts'
import type { PostsControllerCreateMutationRequest, PostsControllerCreateMutationResponse } from '../../types/PostsControllerCreate.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const postsControllerCreateMutationKey = () => [{ url: '/api/posts' }] as const

export type PostsControllerCreateMutationKey = ReturnType<typeof postsControllerCreateMutationKey>

/**
 * {@link /api/posts}
 */
async function postsControllerCreate(data: PostsControllerCreateMutationRequest, config: Partial<RequestConfig<PostsControllerCreateMutationRequest>> = {}) {
  const res = await client<PostsControllerCreateMutationResponse, Error, PostsControllerCreateMutationRequest>({
    method: 'POST',
    url: `/api/posts`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/posts}
 */
export function usePostsControllerCreate(
  options: {
    mutation?: UseMutationOptions<PostsControllerCreateMutationResponse, Error, { data: PostsControllerCreateMutationRequest }>
    client?: Partial<RequestConfig<PostsControllerCreateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postsControllerCreateMutationKey()

  return useMutation<PostsControllerCreateMutationResponse, Error, { data: PostsControllerCreateMutationRequest }>({
    mutationFn: async ({ data }) => {
      return postsControllerCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}