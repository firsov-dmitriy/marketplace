import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { ProductsControllerRemoveMutationResponse, ProductsControllerRemovePathParams } from '../../types/ProductsControllerRemove.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const productsControllerRemoveMutationKey = () => [{ url: '/api/products/{id}' }] as const

export type ProductsControllerRemoveMutationKey = ReturnType<typeof productsControllerRemoveMutationKey>

/**
 * {@link /api/products/:id}
 */
async function productsControllerRemove(id: ProductsControllerRemovePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerRemoveMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/products/${id}`, ...config })
  return res.data
}

/**
 * {@link /api/products/:id}
 */
export function useProductsControllerRemove(
  options: {
    mutation?: UseMutationOptions<ProductsControllerRemoveMutationResponse, Error, { id: ProductsControllerRemovePathParams['id'] }>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? productsControllerRemoveMutationKey()

  return useMutation<ProductsControllerRemoveMutationResponse, Error, { id: ProductsControllerRemovePathParams['id'] }>({
    mutationFn: async ({ id }) => {
      return productsControllerRemove(id, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}