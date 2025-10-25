import db from '@/utils/db'
import { redirect } from 'next/navigation'

export const fetchFeaturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
    },
  })
  return featuredProducts
}

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } }
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return allProducts
}


export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId
    }
  })
  if(!product) redirect('/products')
  return product
}