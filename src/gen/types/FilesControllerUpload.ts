import type { FileUploadResponse } from './FileUploadResponse.ts'

/**
 * @description File uploaded
 */
export type FilesControllerUpload201 = FileUploadResponse

export type FilesControllerUploadMutationRequest = {
  /**
   * @type string | undefined, binary
   */
  file?: Blob
}

export type FilesControllerUploadMutationResponse = FilesControllerUpload201

export type FilesControllerUploadMutation = {
  Response: FilesControllerUpload201
  Request: FilesControllerUploadMutationRequest
  Errors: any
}