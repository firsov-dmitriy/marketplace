import type { FileUploadResponseData } from './FileUploadResponseData.ts'
import type { MetaDto } from './MetaDto.ts'

export type FileUploadResponse = {
  /**
   * @type array
   */
  data: FileUploadResponseData[]
  /**
   * @type object
   */
  meta: MetaDto
}