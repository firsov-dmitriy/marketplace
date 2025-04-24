import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerRefreshMutationResponse, AuthControllerRefresh401 } from '../types/AuthControllerRefresh.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/refresh}
 */
export async function authControllerRefresh(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerRefreshMutationResponse, AuthControllerRefresh401, unknown>({ method: 'POST', url: `/api/auth/refresh`, ...config })
  return res.data
}