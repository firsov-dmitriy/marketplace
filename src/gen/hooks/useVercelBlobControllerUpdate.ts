import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type {
  VercelBlobControllerUpdateMutationRequest,
  VercelBlobControllerUpdateMutationResponse,
  VercelBlobControllerUpdatePathParams,
} from '../types/VercelBlobControllerUpdate.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const vercelBlobControllerUpdateMutationKey = () => [{ url: '/api/vercel-blob/{id}' }] as const

export type VercelBlobControllerUpdateMutationKey = ReturnType<typeof vercelBlobControllerUpdateMutationKey>

/**
 * {@link /api/vercel-blob/:id}
 */
async function vercelBlobControllerUpdate(
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

/**
 * {@link /api/vercel-blob/:id}
 */
export function useVercelBlobControllerUpdate(
  options: {
    mutation?: UseMutationOptions<
      VercelBlobControllerUpdateMutationResponse,
      Error,
      { id: VercelBlobControllerUpdatePathParams['id']; data?: VercelBlobControllerUpdateMutationRequest }
    >
    client?: Partial<RequestConfig<VercelBlobControllerUpdateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? vercelBlobControllerUpdateMutationKey()

  return useMutation<
    VercelBlobControllerUpdateMutationResponse,
    Error,
    { id: VercelBlobControllerUpdatePathParams['id']; data?: VercelBlobControllerUpdateMutationRequest }
  >({
    mutationFn: async ({ id, data }) => {
      return vercelBlobControllerUpdate(id, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}