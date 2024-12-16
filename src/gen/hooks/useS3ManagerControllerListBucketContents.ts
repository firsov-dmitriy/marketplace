import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { S3ManagerControllerListBucketContentsQueryResponse } from '../types/S3ManagerControllerListBucketContents.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const s3ManagerControllerListBucketContentsQueryKey = () => [{ url: '/api/s3-manager' }] as const

export type S3ManagerControllerListBucketContentsQueryKey = ReturnType<typeof s3ManagerControllerListBucketContentsQueryKey>

/**
 * {@link /api/s3-manager}
 */
async function s3ManagerControllerListBucketContents(config: Partial<RequestConfig> = {}) {
  const res = await client<S3ManagerControllerListBucketContentsQueryResponse, Error, unknown>({ method: 'GET', url: `/api/s3-manager`, ...config })
  return res.data
}

export function s3ManagerControllerListBucketContentsQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = s3ManagerControllerListBucketContentsQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return s3ManagerControllerListBucketContents(config)
    },
  })
}

/**
 * {@link /api/s3-manager}
 */
export function useS3ManagerControllerListBucketContents<
  TData = S3ManagerControllerListBucketContentsQueryResponse,
  TQueryData = S3ManagerControllerListBucketContentsQueryResponse,
  TQueryKey extends QueryKey = S3ManagerControllerListBucketContentsQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<S3ManagerControllerListBucketContentsQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? s3ManagerControllerListBucketContentsQueryKey()

  const query = useQuery({
    ...(s3ManagerControllerListBucketContentsQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}