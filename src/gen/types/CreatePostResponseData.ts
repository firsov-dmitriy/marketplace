export type CreatePostResponseData = {
  /**
   * @type number
   */
  id: number
  /**
   * @type string
   */
  title: string
  /**
   * @type string
   */
  text: string
  /**
   * @type string, date-time
   */
  createdAt: string
  /**
   * @type string, date-time
   */
  updatedAt: string
  /**
   * @type boolean
   */
  published: boolean
  /**
   * @type string
   */
  imageUrl: string
}