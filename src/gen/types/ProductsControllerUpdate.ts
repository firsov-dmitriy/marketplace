import type { ProductResponse } from './ProductResponse.ts'
import type { UpdateProductDto } from './UpdateProductDto.ts'

export type ProductsControllerUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

/**
 * @description Edit product
 */
export type ProductsControllerUpdate200 = ProductResponse

export type ProductsControllerUpdateMutationRequest = UpdateProductDto

export type ProductsControllerUpdateMutationResponse = ProductsControllerUpdate200

export type ProductsControllerUpdateMutation = {
  Response: ProductsControllerUpdate200
  Request: ProductsControllerUpdateMutationRequest
  PathParams: ProductsControllerUpdatePathParams
  Errors: any
}