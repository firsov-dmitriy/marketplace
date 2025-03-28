import client from '@kubb/plugin-client/clients/axios'
import type { FilesControllerFindAllQueryResponse } from '../types/FilesControllerFindAll.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/files}
 */
export async function filesControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<FilesControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/files`, ...config })
  return res.data
}