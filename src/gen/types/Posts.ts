import type { CreatePostResponseData } from './CreatePostResponseData.ts'
import type { MetaDto } from './MetaDto.ts'

export type Posts = {
  /**
   * @type array
   */
  data: CreatePostResponseData[]
  /**
   * @type object
   */
  meta: MetaDto
}