import type { CreatePostResponseData } from './CreatePostResponseData.ts'
import type { MetaDto } from './MetaDto.ts'

export type GetPostResponse = {
  /**
   * @type array
   */
  data: CreatePostResponseData[]
  /**
   * @type object
   */
  meta: MetaDto
}