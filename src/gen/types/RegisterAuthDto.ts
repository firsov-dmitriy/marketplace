import type { Role } from './Role.ts'

export type RegisterAuthDto = {
  /**
   * @type string | undefined
   */
  firstName?: string
  /**
   * @type string | undefined
   */
  middleName?: string
  /**
   * @type string | undefined
   */
  lastName?: string
  /**
   * @type string
   */
  email: string
  /**
   * @type string
   */
  password: string
  /**
   * @type string | undefined
   */
  role?: Role
}