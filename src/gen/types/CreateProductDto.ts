export type CreateProductDto = {
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  description: string
  /**
   * @type number
   */
  price: number
  /**
   * @type boolean | undefined
   */
  published?: boolean
}