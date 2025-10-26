import LoadingContainer from '@/components/global/LoadingContainer'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { Suspense } from 'react'
import { headers } from 'next/headers'

async function HomePage() {
  const headersList = await headers()
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingContainer/>}>
        <FeaturedProducts />
      </Suspense>
    </div>
  )
}
export default HomePage
