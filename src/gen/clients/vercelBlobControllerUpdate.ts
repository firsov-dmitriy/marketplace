import client from '@kubb/plugin-client/clients/axios'
import type {
  VercelBlobControllerUpdateMutationRequest,
  VercelBlobControllerUpdateMutationResponse,
  VercelBlobControllerUpdatePathParams,
} from '../types/VercelBlobControllerUpdate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/vercel-blob/:id}
 */
export async function vercelBlobControllerUpdate(
  id: VercelBlobControllerUpdatePathParams['id'],
  data?: VercelBlobControllerUpdateMutationRequest,
  config: Partial<RequestConfig<VercelBlobControllerUpdateMutationRequest>> = {},
) {
  const res = await client<VercelBlobControllerUpdateMutationResponse, Error, VercelBlobControllerUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/vercel-blob/${id}`,
    data,
    ...config,
  })
  return res.data
}