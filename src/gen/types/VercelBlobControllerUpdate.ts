import type { UpdateVercelBlobDto } from './UpdateVercelBlobDto.ts'

export type VercelBlobControllerUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type VercelBlobControllerUpdate200 = any

export type VercelBlobControllerUpdateMutationRequest = UpdateVercelBlobDto

export type VercelBlobControllerUpdateMutationResponse = VercelBlobControllerUpdate200

export type VercelBlobControllerUpdateMutation = {
  Response: VercelBlobControllerUpdate200
  Request: VercelBlobControllerUpdateMutationRequest
  PathParams: VercelBlobControllerUpdatePathParams
  Errors: any
}