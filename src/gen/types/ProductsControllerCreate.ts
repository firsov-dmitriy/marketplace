import type { CreateProductDto } from './CreateProductDto.ts'
import type { ProductResponse } from './ProductResponse.ts'

/**
 * @description Created product
 */
export type ProductsControllerCreate200 = ProductResponse

export type ProductsControllerCreateMutationRequest = CreateProductDto

export type ProductsControllerCreateMutationResponse = ProductsControllerCreate200

export type ProductsControllerCreateMutation = {
  Response: ProductsControllerCreate200
  Request: ProductsControllerCreateMutationRequest
  Errors: any
}