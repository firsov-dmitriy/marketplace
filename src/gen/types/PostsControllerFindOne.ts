import type { GetInfoPostResponse } from './GetInfoPostResponse.ts'

export type PostsControllerFindOnePathParams = {
  /**
   * @type string
   */
  id: string
}

/**
 * @description Posts Info
 */
export type PostsControllerFindOne200 = GetInfoPostResponse

export type PostsControllerFindOneQueryResponse = PostsControllerFindOne200

export type PostsControllerFindOneQuery = {
  Response: PostsControllerFindOne200
  PathParams: PostsControllerFindOnePathParams
  Errors: any
}