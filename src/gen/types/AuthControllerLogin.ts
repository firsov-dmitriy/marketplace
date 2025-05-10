import type { LoginAuthDto } from './LoginAuthDto.ts'
import type { SignInResponse } from './SignInResponse.ts'
import type { UnauthorizedResponse } from './UnauthorizedResponse.ts'

/**
 * @description Welcome!
 */
export type AuthControllerLogin200 = SignInResponse

/**
 * @description Bad request
 */
export type AuthControllerLogin401 = UnauthorizedResponse

export type AuthControllerLoginMutationRequest = LoginAuthDto

export type AuthControllerLoginMutationResponse = AuthControllerLogin200

export type AuthControllerLoginMutation = {
  Response: AuthControllerLogin200
  Request: AuthControllerLoginMutationRequest
  Errors: AuthControllerLogin401
}