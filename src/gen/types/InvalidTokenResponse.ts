import type { InvalidTokenResponseEnum } from './InvalidTokenResponseEnum.ts'

export type InvalidTokenResponse = {
  /**
   * @type string
   */
  message: InvalidTokenResponseEnum
  /**
   * @description Description of the error.
   * @type string
   */
  description: string
}