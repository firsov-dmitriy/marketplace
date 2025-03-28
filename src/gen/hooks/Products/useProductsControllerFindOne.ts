import client from '../../../axiosClient.ts'
import type { RequestConfig } from '../../../axiosClient.ts'
import type { ProductsControllerFindOneQueryResponse, ProductsControllerFindOnePathParams } from '../../types/ProductsControllerFindOne.ts'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const productsControllerFindOneQueryKey = (id: ProductsControllerFindOnePathParams['id']) => [{ url: '/api/products/:id', params: { id: id } }] as const

export type ProductsControllerFindOneQueryKey = ReturnType<typeof productsControllerFindOneQueryKey>

/**
 * {@link /api/products/:id}
 */
async function productsControllerFindOne(id: ProductsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products/${id}`, ...config })
  return res.data
}

export function productsControllerFindOneQueryOptions(id: ProductsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = productsControllerFindOneQueryKey(id)
  return queryOptions({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return productsControllerFindOne(id, config)
    },
  })
}

/**
 * {@link /api/products/:id}
 */
export function useProductsControllerFindOne<
  TData = ProductsControllerFindOneQueryResponse,
  TQueryData = ProductsControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = ProductsControllerFindOneQueryKey,
>(
  id: ProductsControllerFindOnePathParams['id'],
  options: {
    query?: Partial<QueryObserverOptions<ProductsControllerFindOneQueryResponse, Error, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? productsControllerFindOneQueryKey(id)

  const query = useQuery({
    ...(productsControllerFindOneQueryOptions(id, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}