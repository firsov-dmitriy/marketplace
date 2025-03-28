import type { CreateProductDto } from './CreateProductDto.ts'
import type { ProductResponse } from './ProductResponse.ts'

/**
 * @description Created product
 */
export type ProductsControllerCreate201 = ProductResponse

export type ProductsControllerCreateMutationRequest = CreateProductDto

export type ProductsControllerCreateMutationResponse = ProductsControllerCreate201

export type ProductsControllerCreateMutation = {
  Response: ProductsControllerCreate201
  Request: ProductsControllerCreateMutationRequest
  Errors: any
}