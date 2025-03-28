import client from '@kubb/plugin-client/clients/axios'
import type { FilesControllerUploadMutationRequest, FilesControllerUploadMutationResponse } from '../types/FilesControllerUpload.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/files/upload}
 */
export async function filesControllerUpload(
  data?: FilesControllerUploadMutationRequest,
  config: Partial<RequestConfig<FilesControllerUploadMutationRequest>> = {},
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
  const res = await client<FilesControllerUploadMutationResponse, Error, FilesControllerUploadMutationRequest>({
    method: 'POST',
    url: `/api/files/upload`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data', ...config.headers },
    ...config,
  })
  return res.data
}