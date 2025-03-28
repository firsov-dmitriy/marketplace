import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { FilesControllerRemoveMutationRequest, FilesControllerRemoveMutationResponse } from '../../types/FilesControllerRemove.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const filesControllerRemoveMutationKey = () => [{ url: '/api/files/delete' }] as const

export type FilesControllerRemoveMutationKey = ReturnType<typeof filesControllerRemoveMutationKey>

/**
 * {@link /api/files/delete}
 */
async function filesControllerRemove(data: FilesControllerRemoveMutationRequest, config: Partial<RequestConfig<FilesControllerRemoveMutationRequest>> = {}) {
  const res = await client<FilesControllerRemoveMutationResponse, Error, FilesControllerRemoveMutationRequest>({
    method: 'POST',
    url: `/api/files/delete`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/files/delete}
 */
export function useFilesControllerRemove(
  options: {
    mutation?: UseMutationOptions<FilesControllerRemoveMutationResponse, Error, { data: FilesControllerRemoveMutationRequest }>
    client?: Partial<RequestConfig<FilesControllerRemoveMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? filesControllerRemoveMutationKey()

  return useMutation<FilesControllerRemoveMutationResponse, Error, { data: FilesControllerRemoveMutationRequest }>({
    mutationFn: async ({ data }) => {
      return filesControllerRemove(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}