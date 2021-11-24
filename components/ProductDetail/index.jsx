import { Row, Col } from 'react-bootstrap'
import ProductSlider from './components/ProductSlider'
import ProductVariants from './components/ProductVariants'
import ProductDescription from './components/ProductDescription'
import ProductReviews from './components/ProductReviews'
import RecommendationSlider from '@/components/RecommendationSlider'
import { productArr } from '@/copy/products'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
  return (
    <>
      <Row>
        <Col className="mb-3" md={6} lg={8}>
          <ProductSlider imgArray={productArr[0].productImages} />
        </Col>
        <Col className="mb-3" md={6} lg={4}>
          <ProductVariants />
        </Col>
      </Row>
      <ProductDescription />
      <ProductReviews />
      <RecommendationSlider />
    </>
  )
}

export default ProductDetail