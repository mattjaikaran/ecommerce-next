import { Row, Col } from 'react-bootstrap'
import ProductSlider from './components/ProductSlider'
import ProductVariants from './components/ProductVariants'
import ProductDescription from './components/ProductDescription'
import ProductReviews from './components/ProductReviews'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
  return (
    <div>
      <Row>
        <Col className="mb-3" md={6} lg={8}>
          <ProductSlider />
        </Col>
        <Col className="mb-3" md={6} lg={4}>
          <ProductVariants />
        </Col>
      </Row>
      <ProductDescription />
      <ProductReviews />
    </div>
  )
}

export default ProductDetail