import client from '@kubb/plugin-client/clients/axios'
import type { PostsControllerRemoveMutationResponse, PostsControllerRemovePathParams } from '../types/PostsControllerRemove.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/posts/:id}
 */
export async function postsControllerRemove(id: PostsControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/posts/${id}`, ...config })
  return res.data
}