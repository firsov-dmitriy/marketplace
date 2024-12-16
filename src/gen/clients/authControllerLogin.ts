import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerLoginMutationRequest, AuthControllerLoginMutationResponse, AuthControllerLogin400 } from '../types/AuthControllerLogin.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/sign-in}
 */
export async function authControllerLogin(data: AuthControllerLoginMutationRequest, config: Partial<RequestConfig<AuthControllerLoginMutationRequest>> = {}) {
  const res = await client<AuthControllerLoginMutationResponse, AuthControllerLogin400, AuthControllerLoginMutationRequest>({
    method: 'POST',
    url: `/api/auth/sign-in`,
    data,
    ...config,
  })
  return res.data
}