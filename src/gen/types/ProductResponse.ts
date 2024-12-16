import type { MetaDto } from './MetaDto.ts'
import type { ProductResponseData } from './ProductResponseData.ts'

export type ProductResponse = {
  /**
   * @type object
   */
  data: ProductResponseData
  /**
   * @type object
   */
  meta: MetaDto
}