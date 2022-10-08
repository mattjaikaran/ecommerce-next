import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductDetailSlider from './components/ProductDetailSlider'
import ProductVariants from '../ProductVariants'
import ProductDescription from '../ProductDescription'
import ProductReviews from '../ProductReviews'
import RecommendationSlider from '@/components/shared/RecommendationSlider'
import { productArr } from '@/copy/products'
import styles from './ProductDetail.module.scss'

const ProductDetail = ({ id }) => {
  console.log('id', id)
  return (
    <div className={styles.productDetail}>
      <Row>
        <Col className="mb-3 px-0 px-md-3" md={6} lg={8}>
          <ProductDetailSlider imgArray={productArr[0].productImages} />
        </Col>
        <Col className="mb-3" md={6} lg={4}>
          <ProductVariants />
        </Col>
      </Row>
      <ProductDescription />
      <ProductReviews />
      <RecommendationSlider />
    </div>
  )
}

export default ProductDetail
