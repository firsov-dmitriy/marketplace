import client from '@/axiosClient.ts'
import type { AuthControllerResetPasswordMutationRequest, AuthControllerResetPasswordMutationResponse } from '../../types/AuthControllerResetPassword.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerResetPasswordMutationKey = () => [{ url: '/api/auth/reset-password' }] as const

export type AuthControllerResetPasswordMutationKey = ReturnType<typeof authControllerResetPasswordMutationKey>

/**
 * {@link /api/auth/reset-password}
 */
async function authControllerResetPassword(
  data?: AuthControllerResetPasswordMutationRequest,
  config: Partial<RequestConfig<AuthControllerResetPasswordMutationRequest>> = {},
) {
  const res = await client<AuthControllerResetPasswordMutationResponse, Error, AuthControllerResetPasswordMutationRequest>({
    method: 'POST',
    url: `/api/auth/reset-password`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/auth/reset-password}
 */
export function useAuthControllerResetPassword(
  options: {
    mutation?: UseMutationOptions<AuthControllerResetPasswordMutationResponse, Error, { data?: AuthControllerResetPasswordMutationRequest }>
    client?: Partial<RequestConfig<AuthControllerResetPasswordMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerResetPasswordMutationKey()

  return useMutation<AuthControllerResetPasswordMutationResponse, Error, { data?: AuthControllerResetPasswordMutationRequest }>({
    mutationFn: async ({ data }) => {
      return authControllerResetPassword(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}