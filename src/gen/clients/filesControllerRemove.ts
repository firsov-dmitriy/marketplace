import client from '@kubb/plugin-client/clients/axios'
import type { FilesControllerRemoveMutationRequest, FilesControllerRemoveMutationResponse } from '../types/FilesControllerRemove.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/files/delete}
 */
export async function filesControllerRemove(
  data: FilesControllerRemoveMutationRequest,
  config: Partial<RequestConfig<FilesControllerRemoveMutationRequest>> = {},
) {
  const res = await client<FilesControllerRemoveMutationResponse, Error, FilesControllerRemoveMutationRequest>({
    method: 'POST',
    url: `/api/files/delete`,
    data,
    ...config,
  })
  return res.data
}