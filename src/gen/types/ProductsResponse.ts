import type { MetaDto } from './MetaDto.ts'
import type { ProductResponse } from './ProductResponse.ts'

export type ProductsResponse = {
  /**
   * @type array
   */
  data: ProductResponse[]
  /**
   * @type object
   */
  meta: MetaDto
}