import client from '@kubb/plugin-client/clients/axios'
import type {
  AuthControllerResetPasswordConfirmMutationRequest,
  AuthControllerResetPasswordConfirmMutationResponse,
} from '../types/AuthControllerResetPasswordConfirm.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/reset-password}
 */
export async function authControllerResetPasswordConfirm(
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