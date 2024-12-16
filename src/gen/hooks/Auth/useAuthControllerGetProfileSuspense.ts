import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { AuthControllerGetProfileQueryResponse } from '../../types/AuthControllerGetProfile.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const authControllerGetProfileSuspenseQueryKey = () => [{ url: '/api/auth/profile' }] as const

export type AuthControllerGetProfileSuspenseQueryKey = ReturnType<typeof authControllerGetProfileSuspenseQueryKey>

/**
 * {@link /api/auth/profile}
 */
async function authControllerGetProfile(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerGetProfileQueryResponse, Error, unknown>({ method: 'GET', url: `/api/auth/profile`, ...config })
  return res.data
}

export function authControllerGetProfileSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = authControllerGetProfileSuspenseQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return authControllerGetProfile(config)
    },
  })
}

/**
 * {@link /api/auth/profile}
 */
export function useAuthControllerGetProfileSuspense<
  TData = AuthControllerGetProfileQueryResponse,
  TQueryData = AuthControllerGetProfileQueryResponse,
  TQueryKey extends QueryKey = AuthControllerGetProfileSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<AuthControllerGetProfileQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? authControllerGetProfileSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(authControllerGetProfileSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}