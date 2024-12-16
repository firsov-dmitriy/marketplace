import type { RegisterAuthDto } from './RegisterAuthDto.ts'
import type { SignUpResponse } from './SignUpResponse.ts'

/**
 * @description Welcome! You registration
 */
export type AuthControllerCreate200 = SignUpResponse

/**
 * @description Bad request
 */
export type AuthControllerCreate400 = any

export type AuthControllerCreateMutationRequest = RegisterAuthDto

export type AuthControllerCreateMutationResponse = AuthControllerCreate200

export type AuthControllerCreateMutation = {
  Response: AuthControllerCreate200
  Request: AuthControllerCreateMutationRequest
  Errors: AuthControllerCreate400
}