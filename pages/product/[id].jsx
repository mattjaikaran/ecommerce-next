import { useRouter } from 'next/router'
import ProductDetail from '@/components/ProductDetail'
import ProductLayout from '@/components/Layout/ProductLayout'

const ProductID = () => {
  const router = useRouter()
  console.log('router', router)
  return (
    <ProductLayout>
      <h2>Product ID {router.query.id}</h2>
      <ProductDetail />
    </ProductLayout>
  )
}

export default ProductID