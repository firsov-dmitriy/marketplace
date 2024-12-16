export type PostsControllerFindOnePathParams = {
  /**
   * @type string
   */
  id: string
}

export type PostsControllerFindOne200 = any

export type PostsControllerFindOneQueryResponse = PostsControllerFindOne200

export type PostsControllerFindOneQuery = {
  Response: PostsControllerFindOne200
  PathParams: PostsControllerFindOnePathParams
  Errors: any
}