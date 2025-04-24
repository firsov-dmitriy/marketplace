import type { SuccessResponse } from './SuccessResponse.ts'

export type AuthControllerLogout200 = SuccessResponse

export type AuthControllerLogoutMutationResponse = AuthControllerLogout200

export type AuthControllerLogoutMutation = {
  Response: AuthControllerLogout200
  Errors: any
}