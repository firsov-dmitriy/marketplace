import client from '@kubb/plugin-client/clients/axios'
import type { AuthControllerGetProfileQueryResponse } from '../types/AuthControllerGetProfile.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/auth/profile}
 */
export async function authControllerGetProfile(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerGetProfileQueryResponse, Error, unknown>({ method: 'GET', url: `/api/auth/profile`, ...config })
  return res.data
}