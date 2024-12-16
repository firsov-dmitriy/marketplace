import type { CreatePostDto } from './CreatePostDto.ts'

export type PostsControllerCreate201 = any

export type PostsControllerCreateMutationRequest = CreatePostDto

export type PostsControllerCreateMutationResponse = PostsControllerCreate201

export type PostsControllerCreateMutation = {
  Response: PostsControllerCreate201
  Request: PostsControllerCreateMutationRequest
  Errors: any
}