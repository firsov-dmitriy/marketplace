import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { VercelBlobControllerRemoveMutationResponse, VercelBlobControllerRemovePathParams } from '../types/VercelBlobControllerRemove.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const vercelBlobControllerRemoveMutationKey = () => [{ url: '/api/vercel-blob/{id}' }] as const

export type VercelBlobControllerRemoveMutationKey = ReturnType<typeof vercelBlobControllerRemoveMutationKey>

/**
 * {@link /api/vercel-blob/:id}
 */
async function vercelBlobControllerRemove(id: VercelBlobControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<VercelBlobControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/vercel-blob/${id}`, ...config })
  return res.data
}

/**
 * {@link /api/vercel-blob/:id}
 */
export function useVercelBlobControllerRemove(
  options: {
    mutation?: UseMutationOptions<VercelBlobControllerRemoveMutationResponse, Error, { id: VercelBlobControllerRemovePathParams['id'] }>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? vercelBlobControllerRemoveMutationKey()

  return useMutation<VercelBlobControllerRemoveMutationResponse, Error, { id: VercelBlobControllerRemovePathParams['id'] }>({
    mutationFn: async ({ id }) => {
      return vercelBlobControllerRemove(id, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}