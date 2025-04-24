import client from '@/axiosClient.ts'
import type { AuthControllerRefreshMutationResponse, AuthControllerRefresh401 } from '../../types/AuthControllerRefresh.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const authControllerRefreshMutationKey = () => [{ url: '/api/auth/refresh' }] as const

export type AuthControllerRefreshMutationKey = ReturnType<typeof authControllerRefreshMutationKey>

/**
 * {@link /api/auth/refresh}
 */
async function authControllerRefresh(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerRefreshMutationResponse, AuthControllerRefresh401, unknown>({ method: 'POST', url: `/api/auth/refresh`, ...config })
  return res.data
}

/**
 * {@link /api/auth/refresh}
 */
export function useAuthControllerRefresh(
  options: {
    mutation?: UseMutationOptions<AuthControllerRefreshMutationResponse, AuthControllerRefresh401>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? authControllerRefreshMutationKey()

  return useMutation<AuthControllerRefreshMutationResponse, AuthControllerRefresh401>({
    mutationFn: async () => {
      return authControllerRefresh(config)
    },
    mutationKey,
    ...mutationOptions,
  })
}