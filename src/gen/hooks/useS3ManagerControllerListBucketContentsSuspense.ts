import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { S3ManagerControllerListBucketContentsQueryResponse } from '../types/S3ManagerControllerListBucketContents.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const s3ManagerControllerListBucketContentsSuspenseQueryKey = () => [{ url: '/api/s3-manager' }] as const

export type S3ManagerControllerListBucketContentsSuspenseQueryKey = ReturnType<typeof s3ManagerControllerListBucketContentsSuspenseQueryKey>

/**
 * {@link /api/s3-manager}
 */
async function s3ManagerControllerListBucketContents(config: Partial<RequestConfig> = {}) {
  const res = await client<S3ManagerControllerListBucketContentsQueryResponse, Error, unknown>({ method: 'GET', url: `/api/s3-manager`, ...config })
  return res.data
}

export function s3ManagerControllerListBucketContentsSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = s3ManagerControllerListBucketContentsSuspenseQueryKey()
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
export function useS3ManagerControllerListBucketContentsSuspense<
  TData = S3ManagerControllerListBucketContentsQueryResponse,
  TQueryData = S3ManagerControllerListBucketContentsQueryResponse,
  TQueryKey extends QueryKey = S3ManagerControllerListBucketContentsSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<S3ManagerControllerListBucketContentsQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? s3ManagerControllerListBucketContentsSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(s3ManagerControllerListBucketContentsSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}