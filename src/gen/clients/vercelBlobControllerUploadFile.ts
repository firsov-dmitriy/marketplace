import client from '@kubb/plugin-client/clients/axios'
import type { VercelBlobControllerUploadFileMutationRequest, VercelBlobControllerUploadFileMutationResponse } from '../types/VercelBlobControllerUploadFile.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/vercel-blob/upload}
 */
export async function vercelBlobControllerUploadFile(
  data?: VercelBlobControllerUploadFileMutationRequest,
  config: Partial<RequestConfig<VercelBlobControllerUploadFileMutationRequest>> = {},
) {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof typeof data]
      if (typeof key === 'string' && (typeof value === 'string' || value instanceof Blob)) {
        formData.append(key, value)
      }
    })
  }
  const res = await client<VercelBlobControllerUploadFileMutationResponse, Error, VercelBlobControllerUploadFileMutationRequest>({
    method: 'POST',
    url: `/api/vercel-blob/upload`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data', ...config.headers },
    ...config,
  })
  return res.data
}