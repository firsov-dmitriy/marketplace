export type VercelBlobControllerUploadFile201 = any

export type VercelBlobControllerUploadFileMutationRequest = {
  /**
   * @type string | undefined
   */
  comment?: string
  /**
   * @type integer | undefined
   */
  outletId?: number
  /**
   * @type string | undefined, binary
   */
  file?: Blob
}

export type VercelBlobControllerUploadFileMutationResponse = VercelBlobControllerUploadFile201

export type VercelBlobControllerUploadFileMutation = {
  Response: VercelBlobControllerUploadFile201
  Request: VercelBlobControllerUploadFileMutationRequest
  Errors: any
}