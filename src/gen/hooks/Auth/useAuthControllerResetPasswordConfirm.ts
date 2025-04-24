import client from '@/axiosClient.ts'
import type {
  AuthControllerResetPasswordConfirmMutationRequest,
  AuthControllerResetPasswordConfirmMutationResponse,
} from '../../types/AuthControllerResetPasswordConfirm.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerResetPasswordConfirmMutationKey = () => [{ url: '/api/auth/reset-password' }] as const

export type AuthControllerResetPasswordConfirmMutationKey = ReturnType<typeof authControllerResetPasswordConfirmMutationKey>

/**
 * {@link /api/auth/reset-password}
 */
async function authControllerResetPasswordConfirm(
  data?: AuthControllerResetPasswordConfirmMutationRequest,
  config: Partial<RequestConfig<AuthControllerResetPasswordConfirmMutationRequest>> = {},
) {
  const res = await client<AuthControllerResetPasswordConfirmMutationResponse, Error, AuthControllerResetPasswordConfirmMutationRequest>({
    method: 'PATCH',
    url: `/api/auth/reset-password`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/auth/reset-password}
 */
export function useAuthControllerResetPasswordConfirm(
  options: {
    mutation?: UseMutationOptions<AuthControllerResetPasswordConfirmMutationResponse, Error, { data?: AuthControllerResetPasswordConfirmMutationRequest }>
    client?: Partial<RequestConfig<AuthControllerResetPasswordConfirmMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerResetPasswordConfirmMutationKey()

  return useMutation<AuthControllerResetPasswordConfirmMutationResponse, Error, { data?: AuthControllerResetPasswordConfirmMutationRequest }>({
    mutationFn: async ({ data }) => {
      return authControllerResetPasswordConfirm(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}