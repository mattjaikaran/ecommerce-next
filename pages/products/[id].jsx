import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import ProductLayout from '@/views/layouts/ProductLayout'
import ProductDetail from '@/components/products/ProductDetail'

const ProductDetailPage = () => {
  const router = useRouter()
  console.log('router', router)
  return (
    <ProductLayout>
      <Container>
        <h2>Product ID {router.query.id}</h2>
        <ProductDetail id={router.query.id} />
      </Container>
    </ProductLayout>
  )
}

export default ProductDetailPage
