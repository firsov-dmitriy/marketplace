import client from '../../../../axiosClient.ts'
import type { RequestConfig } from '../../../../axiosClient.ts'
import type { ProductsControllerCreateMutationRequest, ProductsControllerCreateMutationResponse } from '../../types/ProductsControllerCreate.ts'
import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const productsControllerCreateMutationKey = () => [{ url: '/api/products' }] as const

export type ProductsControllerCreateMutationKey = ReturnType<typeof productsControllerCreateMutationKey>

/**
 * {@link /api/products}
 */
async function productsControllerCreate(
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

/**
 * {@link /api/products}
 */
export function useProductsControllerCreate(
  options: {
    mutation?: UseMutationOptions<ProductsControllerCreateMutationResponse, Error, { data: ProductsControllerCreateMutationRequest }>
    client?: Partial<RequestConfig<ProductsControllerCreateMutationRequest>>
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? productsControllerCreateMutationKey()

  return useMutation<ProductsControllerCreateMutationResponse, Error, { data: ProductsControllerCreateMutationRequest }>({
    mutationFn: async ({ data }) => {
      return productsControllerCreate(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}