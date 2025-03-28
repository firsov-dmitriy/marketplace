import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { FilesControllerUploadMutationRequest, FilesControllerUploadMutationResponse } from '../../types/FilesControllerUpload.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const filesControllerUploadMutationKey = () => [{ url: '/api/files/upload' }] as const

export type FilesControllerUploadMutationKey = ReturnType<typeof filesControllerUploadMutationKey>

/**
 * {@link /api/files/upload}
 */
async function filesControllerUpload(data?: FilesControllerUploadMutationRequest, config: Partial<RequestConfig<FilesControllerUploadMutationRequest>> = {}) {
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

/**
 * {@link /api/files/upload}
 */
export function useFilesControllerUpload(
  options: {
    mutation?: UseMutationOptions<FilesControllerUploadMutationResponse, Error, { data?: FilesControllerUploadMutationRequest }>
    client?: Partial<RequestConfig<FilesControllerUploadMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? filesControllerUploadMutationKey()

  return useMutation<FilesControllerUploadMutationResponse, Error, { data?: FilesControllerUploadMutationRequest }>({
    mutationFn: async ({ data }) => {
      return filesControllerUpload(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}