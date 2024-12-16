import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerUploadFileMutationRequest, VercelBlobControllerUploadFileMutationResponse } from '../types/VercelBlobControllerUploadFile.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const vercelBlobControllerUploadFileMutationKey = () => [{ url: '/api/vercel-blob/upload' }] as const

export type VercelBlobControllerUploadFileMutationKey = ReturnType<typeof vercelBlobControllerUploadFileMutationKey>

/**
 * {@link /api/vercel-blob/upload}
 */
async function vercelBlobControllerUploadFile(
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

/**
 * {@link /api/vercel-blob/upload}
 */
export function useVercelBlobControllerUploadFile(
  options: {
    mutation?: UseMutationOptions<VercelBlobControllerUploadFileMutationResponse, Error, { data?: VercelBlobControllerUploadFileMutationRequest }>
    client?: Partial<RequestConfig<VercelBlobControllerUploadFileMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? vercelBlobControllerUploadFileMutationKey()

  return useMutation<VercelBlobControllerUploadFileMutationResponse, Error, { data?: VercelBlobControllerUploadFileMutationRequest }>({
    mutationFn: async ({ data }) => {
      return vercelBlobControllerUploadFile(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}