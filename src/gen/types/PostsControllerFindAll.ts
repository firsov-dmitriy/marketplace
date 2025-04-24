import type { Posts } from './Posts.ts'

/**
 * @description Posts list
 */
export type PostsControllerFindAll200 = Posts

export type PostsControllerFindAllQueryResponse = PostsControllerFindAll200

export type PostsControllerFindAllQuery = {
  Response: PostsControllerFindAll200
  Errors: any
}