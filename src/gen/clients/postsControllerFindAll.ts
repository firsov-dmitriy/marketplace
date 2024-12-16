import client from '@kubb/plugin-client/clients/axios'
import type { PostsControllerFindAllQueryResponse } from '../types/PostsControllerFindAll.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/posts}
 */
export async function postsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<PostsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/posts`, ...config })
  return res.data
}