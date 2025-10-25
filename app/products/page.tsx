import ProductsContainer from '@/components/products/ProductsContainer';
import { log } from 'console'
import React from 'react'

type Params = { layout?: string; search?: string }

async function ProductsPage({
  searchParams,
}: {
  searchParams: Params | Promise<Params>
}) {
  const { layout = 'grid', search = '' } = (await searchParams) ?? {}

  return <ProductsContainer layout={layout} search={search} />
}

export default ProductsPage
