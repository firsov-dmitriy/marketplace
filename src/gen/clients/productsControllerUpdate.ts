import client from '@kubb/plugin-client/clients/axios'
import type {
  ProductsControllerUpdateMutationRequest,
  ProductsControllerUpdateMutationResponse,
  ProductsControllerUpdatePathParams,
} from '../types/ProductsControllerUpdate.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * {@link /api/products/:id}
 */
export async function productsControllerUpdate(
  id: ProductsControllerUpdatePathParams['id'],
  data?: ProductsControllerUpdateMutationRequest,
  config: Partial<RequestConfig<ProductsControllerUpdateMutationRequest>> = {},
) {
  const res = await client<ProductsControllerUpdateMutationResponse, Error, ProductsControllerUpdateMutationRequest>({
    method: 'PATCH',
    url: `/api/products/${id}`,
    data,
    ...config,
  })
  return res.data
}