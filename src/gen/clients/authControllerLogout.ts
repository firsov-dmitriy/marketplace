import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerLogoutMutationResponse } from '../types/AuthControllerLogout.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/logout}
 */
export async function authControllerLogout(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerLogoutMutationResponse, Error, unknown>({ method: 'POST', url: `/api/auth/logout`, ...config })
  return res.data
}