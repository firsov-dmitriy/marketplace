import client from '@/axiosClient.ts'
import type { ProductsControllerFindOneQueryResponse, ProductsControllerFindOnePathParams } from '../../types/ProductsControllerFindOne.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const productsControllerFindOneSuspenseQueryKey = (id: ProductsControllerFindOnePathParams['id']) =>
  [{ url: '/api/products/:id', params: { id: id } }] as const

export type ProductsControllerFindOneSuspenseQueryKey = ReturnType<typeof productsControllerFindOneSuspenseQueryKey>

/**
 * {@link /api/products/:id}
 */
async function productsControllerFindOne(id: ProductsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindOneQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products/${id}`, ...config })
  return res.data
}

export function productsControllerFindOneSuspenseQueryOptions(id: ProductsControllerFindOnePathParams['id'], config: Partial<RequestConfig> = {}) {
  const queryKey = productsControllerFindOneSuspenseQueryKey(id)
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
export function useProductsControllerFindOneSuspense<
  TData = ProductsControllerFindOneQueryResponse,
  TQueryData = ProductsControllerFindOneQueryResponse,
  TQueryKey extends QueryKey = ProductsControllerFindOneSuspenseQueryKey,
>(
  id: ProductsControllerFindOnePathParams['id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<ProductsControllerFindOneQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? productsControllerFindOneSuspenseQueryKey(id)

  const query = useSuspenseQuery({
    ...(productsControllerFindOneSuspenseQueryOptions(id, config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}