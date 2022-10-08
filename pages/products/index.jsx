import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import ProductLayout from '@/views/layouts/ProductLayout'

const AllProductsPage = () => {
  const router = useRouter()
  console.log('router', router)
  return (
    <ProductLayout>
      <Container>
        <h2>All Products Page</h2>
      </Container>
    </ProductLayout>
  )
}

export default AllProductsPage
