import client from '@kubb/plugin-client/clients/axios'
import type { VercelBlobControllerFindAllQueryResponse } from '../types/VercelBlobControllerFindAll.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/vercel-blob}
 */
export async function vercelBlobControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/vercel-blob`, ...config })
  return res.data
}