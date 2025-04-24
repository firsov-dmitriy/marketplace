import type { InvalidTokenResponse } from './InvalidTokenResponse.ts'
import type { SuccessResponse } from './SuccessResponse.ts'

export type AuthControllerRefresh200 = SuccessResponse

/**
 * @description Expired refresh token
 */
export type AuthControllerRefresh401 = InvalidTokenResponse

export type AuthControllerRefreshMutationResponse = AuthControllerRefresh200

export type AuthControllerRefreshMutation = {
  Response: AuthControllerRefresh200
  Errors: AuthControllerRefresh401
}