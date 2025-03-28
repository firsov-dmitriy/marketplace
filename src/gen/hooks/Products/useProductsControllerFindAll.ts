import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { ProductsControllerFindAllQueryResponse } from '../../types/ProductsControllerFindAll.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const productsControllerFindAllQueryKey = () => [{ url: '/api/products' }] as const

export type ProductsControllerFindAllQueryKey = ReturnType<typeof productsControllerFindAllQueryKey>

/**
 * {@link /api/products}
 */
async function productsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products`, ...config })
  return res.data
}

export function productsControllerFindAllQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = productsControllerFindAllQueryKey()
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return productsControllerFindAll(config)
    },
  })
}

/**
 * {@link /api/products}
 */
export function useProductsControllerFindAll<
  TData = ProductsControllerFindAllQueryResponse,
  TQueryData = ProductsControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = ProductsControllerFindAllQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<ProductsControllerFindAllQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? productsControllerFindAllQueryKey()

  const query = useQuery({
    ...(productsControllerFindAllQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}