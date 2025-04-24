import client from '@/axiosClient.ts'
import type { AuthControllerLogoutMutationResponse } from '../../types/AuthControllerLogout.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerLogoutMutationKey = () => [{ url: '/api/auth/logout' }] as const

export type AuthControllerLogoutMutationKey = ReturnType<typeof authControllerLogoutMutationKey>

/**
 * {@link /api/auth/logout}
 */
async function authControllerLogout(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerLogoutMutationResponse, Error, unknown>({ method: 'POST', url: `/api/auth/logout`, ...config })
  return res.data
}

/**
 * {@link /api/auth/logout}
 */
export function useAuthControllerLogout(
  options: {
    mutation?: UseMutationOptions<AuthControllerLogoutMutationResponse, Error>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerLogoutMutationKey()

  return useMutation<AuthControllerLogoutMutationResponse, Error>({
    mutationFn: async () => {
      return authControllerLogout(config)
    },
    mutationKey,
    ...mutationOptions,
  })
}