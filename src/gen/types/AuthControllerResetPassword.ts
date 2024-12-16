import type { ResetPasswordAuth } from './ResetPasswordAuth.ts'

export type AuthControllerResetPassword201 = any

export type AuthControllerResetPasswordMutationRequest = ResetPasswordAuth

export type AuthControllerResetPasswordMutationResponse = AuthControllerResetPassword201

export type AuthControllerResetPasswordMutation = {
  Response: AuthControllerResetPassword201
  Request: AuthControllerResetPasswordMutationRequest
  Errors: any
}