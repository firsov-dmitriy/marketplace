import client from '@kubb/plugin-client/clients/axios'
import type { ProductsControllerFindAllQueryResponse } from '../types/ProductsControllerFindAll.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/products}
 */
export async function productsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products`, ...config })
  return res.data
}