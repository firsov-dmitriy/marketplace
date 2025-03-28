import type { CreatePostResponseData } from './CreatePostResponseData.ts'
import type { MetaDto } from './MetaDto.ts'

export type GetInfoPostResponse = {
  /**
   * @type object
   */
  data: CreatePostResponseData
  /**
   * @type object
   */
  meta: MetaDto
}