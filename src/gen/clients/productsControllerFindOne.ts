import client from '@kubb/plugin-client/clients/axios'
import type { ProductsControllerFindOneQueryResponse, ProductsControllerFindOnePathParams } from '../types/ProductsControllerFindOne.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/products/:id}
 */
export async function productsControllerFindOne(id: ProductsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products/${id}`, ...config })
  return res.data
}