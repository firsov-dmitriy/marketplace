import type { ProductsResponse } from './ProductsResponse.ts'

/**
 * @description Products list
 */
export type ProductsControllerFindAll200 = ProductsResponse

export type ProductsControllerFindAllQueryResponse = ProductsControllerFindAll200

export type ProductsControllerFindAllQuery = {
  Response: ProductsControllerFindAll200
  Errors: any
}