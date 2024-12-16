import client from '@kubb/plugin-client/clients/axios'
import type { ProductsControllerCreateMutationRequest, ProductsControllerCreateMutationResponse } from '../types/ProductsControllerCreate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/products}
 */
export async function productsControllerCreate(
  data: ProductsControllerCreateMutationRequest,
  config: Partial<RequestConfig<ProductsControllerCreateMutationRequest>> = {},
) {
  const res = await client<ProductsControllerCreateMutationResponse, Error, ProductsControllerCreateMutationRequest>({
    method: 'POST',
    url: `/api/products`,
    data,
    ...config,
  })
  return res.data
}