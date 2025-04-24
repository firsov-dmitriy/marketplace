import type { SignUpResponse } from './SignUpResponse.ts'
import type { UnauthorizedResponse } from './UnauthorizedResponse.ts'

/**
 * @description Welcome! You registration
 */
export type AuthControllerGetProfile200 = SignUpResponse

/**
 * @description Unauthorized
 */
export type AuthControllerGetProfile401 = UnauthorizedResponse

export type AuthControllerGetProfileQueryResponse = AuthControllerGetProfile200

export type AuthControllerGetProfileQuery = {
  Response: AuthControllerGetProfile200
  Errors: AuthControllerGetProfile401
}