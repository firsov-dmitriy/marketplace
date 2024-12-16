import client from '@kubb/plugin-client/clients/axios'
import type { PostsControllerCreateMutationRequest, PostsControllerCreateMutationResponse } from '../types/PostsControllerCreate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/posts}
 */
export async function postsControllerCreate(
  data: PostsControllerCreateMutationRequest,
  config: Partial<RequestConfig<PostsControllerCreateMutationRequest>> = {},
) {
  const res = await client<PostsControllerCreateMutationResponse, Error, PostsControllerCreateMutationRequest>({
    method: 'POST',
    url: `/api/posts`,
    data,
    ...config,
  })
  return res.data
}