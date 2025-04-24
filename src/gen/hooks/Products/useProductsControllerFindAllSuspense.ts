import client from '@/axiosClient.ts'
import type { ProductsControllerFindAllQueryResponse } from '../../types/ProductsControllerFindAll.ts'
import type { RequestConfig } from '@/axiosClient.ts'
import type { QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const productsControllerFindAllSuspenseQueryKey = () => [{ url: '/api/products' }] as const

export type ProductsControllerFindAllSuspenseQueryKey = ReturnType<typeof productsControllerFindAllSuspenseQueryKey>

/**
 * {@link /api/products}
 */
async function productsControllerFindAll(config: Partial<RequestConfig> = {}) {
  const res = await client<ProductsControllerFindAllQueryResponse, Error, unknown>({ method: 'GET', url: `/api/products`, ...config })
  return res.data
}

export function productsControllerFindAllSuspenseQueryOptions(config: Partial<RequestConfig> = {}) {
  const queryKey = productsControllerFindAllSuspenseQueryKey()
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
export function useProductsControllerFindAllSuspense<
  TData = ProductsControllerFindAllQueryResponse,
  TQueryData = ProductsControllerFindAllQueryResponse,
  TQueryKey extends QueryKey = ProductsControllerFindAllSuspenseQueryKey,
>(
  options: {
    query?: Partial<UseSuspenseQueryOptions<ProductsControllerFindAllQueryResponse, Error, TData, TQueryKey>>
    client?: Partial<RequestConfig>
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? productsControllerFindAllSuspenseQueryKey()

  const query = useSuspenseQuery({
    ...(productsControllerFindAllSuspenseQueryOptions(config) as unknown as UseSuspenseQueryOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
  }) as UseSuspenseQueryResult<TData, Error> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}