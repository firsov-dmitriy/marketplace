import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerCreateMutationRequest, AuthControllerCreateMutationResponse, AuthControllerCreate400 } from '../types/AuthControllerCreate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/sign-up}
 */
export async function authControllerCreate(
  data: AuthControllerCreateMutationRequest,
  config: Partial<RequestConfig<AuthControllerCreateMutationRequest>> = {},
) {
  const res = await client<AuthControllerCreateMutationResponse, AuthControllerCreate400, AuthControllerCreateMutationRequest>({
    method: 'POST',
    url: `/api/auth/sign-up`,
    data,
    ...config,
  })
  return res.data
}