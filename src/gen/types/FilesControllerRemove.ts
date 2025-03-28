import type { DeleteFilesDto } from './DeleteFilesDto.ts'

/**
 * @description File deleted
 */
export type FilesControllerRemove200 = any

export type FilesControllerRemoveMutationRequest = DeleteFilesDto

export type FilesControllerRemoveMutationResponse = FilesControllerRemove200

export type FilesControllerRemoveMutation = {
  Response: FilesControllerRemove200
  Request: FilesControllerRemoveMutationRequest
  Errors: any
}