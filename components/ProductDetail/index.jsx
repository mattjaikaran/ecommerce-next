import { Row, Col } from 'react-bootstrap'
import ProductSlider from './components/ProductSlider'
import ProductVariants from './components/ProductVariants'
import ProductReviews from './components/ProductReviews'
import RecommendationSlider from '@components/RecommendationSlider'
import './ProductDetail.module.scss'

const ProductDetail = () => {
  return (
    <div>
      <Row>
        <Col>
          <ProductSlider />
        </Col>
        <Col>
          <ProductVariants />
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
      <Row>
        <RecommendationSlider />
      </Row>
      <Row>
        <ProductReviews />
      </Row>
    </div>
  )
}

export default ProductDetail