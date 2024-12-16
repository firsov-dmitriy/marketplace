import type { MetaDto } from './MetaDto.ts'
import type { SignUpResponseData } from './SignUpResponseData.ts'

export type SignUpResponse = {
  /**
   * @type object
   */
  data: SignUpResponseData
  /**
   * @type object
   */
  meta: MetaDto
}