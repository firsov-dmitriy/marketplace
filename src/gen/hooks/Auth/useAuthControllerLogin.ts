import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { AuthControllerLoginMutationRequest, AuthControllerLoginMutationResponse, AuthControllerLogin400 } from '../../types/AuthControllerLogin.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerLoginMutationKey = () => [{ url: '/api/auth/sign-in' }] as const

export type AuthControllerLoginMutationKey = ReturnType<typeof authControllerLoginMutationKey>

/**
 * {@link /api/auth/sign-in}
 */
async function authControllerLogin(data: AuthControllerLoginMutationRequest, config: Partial<RequestConfig<AuthControllerLoginMutationRequest>> = {}) {
  const res = await client<AuthControllerLoginMutationResponse, AuthControllerLogin400, AuthControllerLoginMutationRequest>({
    method: 'POST',
    url: `/api/auth/sign-in`,
    data,
    ...config,
  })
  return res.data
}

/**
 * {@link /api/auth/sign-in}
 */
export function useAuthControllerLogin(
  options: {
    mutation?: UseMutationOptions<AuthControllerLoginMutationResponse, AuthControllerLogin400, { data: AuthControllerLoginMutationRequest }>
    client?: Partial<RequestConfig<AuthControllerLoginMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerLoginMutationKey()

  return useMutation<AuthControllerLoginMutationResponse, AuthControllerLogin400, { data: AuthControllerLoginMutationRequest }>({
    mutationFn: async ({ data }) => {
      return authControllerLogin(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}