import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerGetProfileQueryResponse, AuthControllerGetProfile401 } from '../types/AuthControllerGetProfile.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/profile}
 */
export async function authControllerGetProfile(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerGetProfileQueryResponse, AuthControllerGetProfile401, unknown>({ method: 'GET', url: `/api/auth/profile`, ...config })
  return res.data
}