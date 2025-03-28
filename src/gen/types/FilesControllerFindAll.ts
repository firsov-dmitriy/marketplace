import type { FileUploadResponse } from './FileUploadResponse.ts'

/**
 * @description File uploaded
 */
export type FilesControllerFindAll201 = FileUploadResponse

export type FilesControllerFindAllQueryResponse = FilesControllerFindAll201

export type FilesControllerFindAllQuery = {
  Response: FilesControllerFindAll201
  Errors: any
}