import type { Role } from './Role.ts'

export type SignUpResponseData = {
  /**
   * @type string
   */
  firstName: string
  /**
   * @type string
   */
  middleName: string
  /**
   * @type string
   */
  lastName: string
  /**
   * @type string
   */
  email: string
  /**
   * @type string
   */
  password: string
  /**
   * @type string
   */
  role: Role
  /**
   * @type string
   */
  accessToken: string
  /**
   * @type string
   */
  refreshToken: string
}