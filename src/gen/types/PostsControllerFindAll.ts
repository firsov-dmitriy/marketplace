import type { UpdatePostDto } from './UpdatePostDto.ts'

/**
 * @description Posts list
 */
export type PostsControllerFindAll200 = {
  /**
   * @type array | undefined
   */
  data?: UpdatePostDto[]
  /**
   * @type object | undefined
   */
  meta?: {
    /**
     * @type string | undefined, date-time
     */
    timestamp?: string
    /**
     * @type number | undefined
     */
    statusCode?: number
  }
}

export type PostsControllerFindAllQueryResponse = PostsControllerFindAll200

export type PostsControllerFindAllQuery = {
  Response: PostsControllerFindAll200
  Errors: any
}