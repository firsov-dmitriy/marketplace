import client from '@kubb/plugin-client/clients/axios'
import type { VercelBlobControllerRemoveMutationResponse, VercelBlobControllerRemovePathParams } from '../types/VercelBlobControllerRemove.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/vercel-blob/:id}
 */
export async function vercelBlobControllerRemove(id: VercelBlobControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/vercel-blob/${id}`, ...config })
  return res.data
}