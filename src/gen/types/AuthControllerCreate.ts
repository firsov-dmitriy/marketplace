import type { RegisterAuthDto } from './RegisterAuthDto.ts'
import type { SignUpResponse } from './SignUpResponse.ts'

/**
 * @description Welcome! You registration
 */
export type AuthControllerCreate201 = SignUpResponse

/**
 * @description Bad request
 */
export type AuthControllerCreate400 = any

export type AuthControllerCreateMutationRequest = RegisterAuthDto

export type AuthControllerCreateMutationResponse = AuthControllerCreate201

export type AuthControllerCreateMutation = {
  Response: AuthControllerCreate201
  Request: AuthControllerCreateMutationRequest
  Errors: AuthControllerCreate400
}