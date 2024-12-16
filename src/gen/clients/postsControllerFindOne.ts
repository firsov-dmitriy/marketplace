import client from '@kubb/plugin-client/clients/axios'
import type { PostsControllerFindOneQueryResponse, PostsControllerFindOnePathParams } from '../types/PostsControllerFindOne.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/posts/:id}
 */
export async function postsControllerFindOne(id: PostsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts/${id}`, ...config })
  return res.data
}