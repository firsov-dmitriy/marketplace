import type { CreatePostDto } from './CreatePostDto.ts'
import type { CreatePostResponse } from './CreatePostResponse.ts'

/**
 * @description Created Post
 */
export type PostsControllerCreate201 = CreatePostResponse

export type PostsControllerCreateMutationRequest = CreatePostDto

export type PostsControllerCreateMutationResponse = PostsControllerCreate201

export type PostsControllerCreateMutation = {
  Response: PostsControllerCreate201
  Request: PostsControllerCreateMutationRequest
  Errors: any
}