import type { MetaDto } from './MetaDto.ts'
import type { SignInResponseData } from './SignInResponseData.ts'

export type SignInResponse = {
  /**
   * @type object
   */
  data: SignInResponseData
  /**
   * @type object
   */
  meta: MetaDto
}