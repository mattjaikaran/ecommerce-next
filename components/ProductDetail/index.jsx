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
      <Row>
        <Col md={8}>
          <ProductDescription />
        </Col>
      </Row>
      <Row>
        <ProductReviews />
      </Row>
    </div>
  )
}

export default ProductDetail