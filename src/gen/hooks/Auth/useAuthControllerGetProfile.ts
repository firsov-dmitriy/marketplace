import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { AuthControllerGetProfileQueryResponse } from '../../types/AuthControllerGetProfile.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const authControllerGetProfileQueryKey = () => [{ url: '/api/auth/profile' }] as const

export type AuthControllerGetProfileQueryKey = ReturnType<typeof authControllerGetProfileQueryKey>

/**
 * {@link /api/auth/profile}
 */
async function authControllerGetProfile(config: Partial<RequestConfig> = {}) {
  const res = await client<AuthControllerGetProfileQueryResponse, Error, unknown>({ method: 'GET', url: `/api/auth/profile`, ...config })
  return res.data
}

export function authControllerGetProfileQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = authControllerGetProfileQueryKey()
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
export function useAuthControllerGetProfile<
  TData = AuthControllerGetProfileQueryResponse,
  TQueryData = AuthControllerGetProfileQueryResponse,
  TQueryKey extends QueryKey = AuthControllerGetProfileQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<AuthControllerGetProfileQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? authControllerGetProfileQueryKey()

  const query = useQuery({
    ...(authControllerGetProfileQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}