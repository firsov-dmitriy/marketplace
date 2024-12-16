import client from '@kubb/plugin-client/clients/axios'
import type { VercelBlobControllerFindOneQueryResponse, VercelBlobControllerFindOnePathParams } from '../types/VercelBlobControllerFindOne.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/vercel-blob/:id}
 */
export async function vercelBlobControllerFindOne(id: VercelBlobControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob/${id}`, ...config })
  return res.data
}