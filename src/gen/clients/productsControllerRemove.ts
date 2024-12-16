import client from '@kubb/plugin-client/clients/axios'
import type { ProductsControllerRemoveMutationResponse, ProductsControllerRemovePathParams } from '../types/ProductsControllerRemove.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/products/:id}
 */
export async function productsControllerRemove(id: ProductsControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/products/${id}`, ...config })
  return res.data
}