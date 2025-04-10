export type UpdatePostDto = {
  /**
   * @type string | undefined
   */
  title?: string
  /**
   * @type string | undefined
   */
  text?: string
  /**
   * @type boolean | undefined
   */
  published?: boolean
  /**
   * @type string | undefined, uri
   */
  imageUrl?: string
}