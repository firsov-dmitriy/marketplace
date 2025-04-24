import client from '@/axiosClient.ts'
import type {
  ProductsControllerUpdateMutationRequest,
  ProductsControllerUpdateMutationResponse,
  ProductsControllerUpdatePathParams,
} from '../../types/ProductsControllerUpdate.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const productsControllerUpdateMutationKey = () => [{ url: '/api/products/{id}' }] as const

export type ProductsControllerUpdateMutationKey = ReturnType<typeof productsControllerUpdateMutationKey>

/**
 * {@link /api/products/:id}
 */
async function productsControllerUpdate(
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

/**
 * {@link /api/products/:id}
 */
export function useProductsControllerUpdate(
  options: {
    mutation?: UseMutationOptions<
      ProductsControllerUpdateMutationResponse,
      Error,
      { id: ProductsControllerUpdatePathParams['id']; data?: ProductsControllerUpdateMutationRequest }
    >
    client?: Partial<RequestConfig<ProductsControllerUpdateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? productsControllerUpdateMutationKey()

  return useMutation<
    ProductsControllerUpdateMutationResponse,
    Error,
    { id: ProductsControllerUpdatePathParams['id']; data?: ProductsControllerUpdateMutationRequest }
  >({
    mutationFn: async ({ id, data }) => {
      return productsControllerUpdate(id, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}