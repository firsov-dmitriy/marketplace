import client from '@kubb/plugin-client/clients/axios'
import type { S3ManagerControllerListBucketContentsQueryResponse } from '../types/S3ManagerControllerListBucketContents.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/s3-manager}
 */
export async function s3ManagerControllerListBucketContents(config: Partial<RequestConfig> = {}) {
  const res = await client<S3ManagerControllerListBucketContentsQueryResponse, Error, unknown>({ method: 'GET', url: `/api/s3-manager`, ...config })
  return res.data
}