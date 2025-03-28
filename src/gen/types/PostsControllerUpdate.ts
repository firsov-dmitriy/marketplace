import type { CreatePostResponse } from './CreatePostResponse.ts'
import type { UpdatePostDto } from './UpdatePostDto.ts'

export type PostsControllerUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

/**
 * @description Updated Post
 */
export type PostsControllerUpdate200 = CreatePostResponse

export type PostsControllerUpdateMutationRequest = UpdatePostDto

export type PostsControllerUpdateMutationResponse = PostsControllerUpdate200

export type PostsControllerUpdateMutation = {
  Response: PostsControllerUpdate200
  Request: PostsControllerUpdateMutationRequest
  PathParams: PostsControllerUpdatePathParams
  Errors: any
}