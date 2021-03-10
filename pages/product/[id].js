import Layout from '@components/Layout'
import ProductDetail from "@components/ProductDetail"
import { Row, Col } from 'react-bootstrap'

const ProductID = () => {
  return (
    <Layout>
      <h2>Product ID</h2>
      <ProductDetail />
    </Layout>
  )
}

export default ProductID