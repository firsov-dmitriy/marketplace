import client from '@/axiosClient.ts'
import type { AuthControllerCreateMutationRequest, AuthControllerCreateMutationResponse, AuthControllerCreate400 } from '../../types/AuthControllerCreate.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerCreateMutationKey = () => [{ url: '/api/auth/sign-up' }] as const

export type AuthControllerCreateMutationKey = ReturnType<typeof authControllerCreateMutationKey>

/**
 * {@link /api/auth/sign-up}
 */
async function authControllerCreate(data: AuthControllerCreateMutationRequest, config: Partial<RequestConfig<AuthControllerCreateMutationRequest>> = {}) {
  const res = await client<AuthControllerCreateMutationResponse, AuthControllerCreate400, AuthControllerCreateMutationRequest>({
    method: 'POST',
    url: `/api/auth/sign-up`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/auth/sign-up}
 */
export function useAuthControllerCreate(
  options: {
    mutation?: UseMutationOptions<AuthControllerCreateMutationResponse, AuthControllerCreate400, { data: AuthControllerCreateMutationRequest }>
    client?: Partial<RequestConfig<AuthControllerCreateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerCreateMutationKey()

  return useMutation<AuthControllerCreateMutationResponse, AuthControllerCreate400, { data: AuthControllerCreateMutationRequest }>({
    mutationFn: async ({ data }) => {
      return authControllerCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}