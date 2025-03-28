import type { GetPostResponse } from './GetPostResponse.ts'

/**
 * @description Posts list
 */
export type PostsControllerFindAll200 = GetPostResponse

export type PostsControllerFindAllQueryResponse = PostsControllerFindAll200

export type PostsControllerFindAllQuery = {
  Response: PostsControllerFindAll200
  Errors: any
}