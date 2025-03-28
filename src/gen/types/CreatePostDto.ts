export type CreatePostDto = {
  /**
   * @type string
   */
  title: string
  /**
   * @type string
   */
  text: string
  /**
   * @type boolean
   */
  published: boolean
  /**
   * @type string, uri
   */
  imageUrl: string
}