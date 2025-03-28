export type FileUploadResponseData = {
  /**
   * @type string
   */
  url: string
  /**
   * @description Url to download
   * @type string
   */
  downloadUrl: string
  /**
   * @type string
   */
  pathname: string
  /**
   * @type string
   */
  contentType: string
  /**
   * @type string
   */
  contentDisposition: string
}