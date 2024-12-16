import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerResetPasswordMutationRequest, AuthControllerResetPasswordMutationResponse } from '../types/AuthControllerResetPassword.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/reset-password}
 */
export async function authControllerResetPassword(
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