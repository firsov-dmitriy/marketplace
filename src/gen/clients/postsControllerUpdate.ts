import client from '@kubb/plugin-client/clients/axios'
import type {
  PostsControllerUpdateMutationRequest,
  PostsControllerUpdateMutationResponse,
  PostsControllerUpdatePathParams,
} from '../types/PostsControllerUpdate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/posts/:id}
 */
export async function postsControllerUpdate(
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