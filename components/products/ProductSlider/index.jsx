import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from '@/components/products/ProductCard'
import {
  productObj,
  productObjTwo,
  productObjThree,
  productObjFour,
} from '@/copy/products'
import styles from './ProductSlider.module.scss'

const ProductSlider = () => {
  const MobileCategorySlider = () => {
    return (
      <Carousel
        className={styles.categoryCarousel}
        interval={null}
        indicators={false}
      >
        <Carousel.Item className={styles.categoryCarouselItem}>
          <Row className={styles.categoryCarouselItemRow}>
            <Col>
              <ProductCard product={productObj} />
            </Col>
            <Col>
              <ProductCard product={productObjTwo} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className={styles.categoryCarouselItem}>
          <Row className={styles.categoryCarouselItemRow}>
            <Col>
              <ProductCard product={productObjThree} />
            </Col>
            <Col>
              <ProductCard product={productObjFour} />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    )
  }

  const DesktopCategorySlider = () => {
    return (
      <Carousel
        className={styles.categoryCarousel}
        interval={null}
        indicators={false}
      >
        <Carousel.Item className={styles.categoryCarouselItem}>
          <Row className={styles.categoryCarouselItemRow}>
            <Col>
              <ProductCard product={productObj} />
            </Col>
            <Col>
              <ProductCard product={productObjTwo} />
            </Col>
            <Col>
              <ProductCard product={productObjThree} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className={styles.categoryCarouselItem}>
          <Row className={styles.categoryCarouselItemRow}>
            <Col>
              <ProductCard product={productObj} />
            </Col>
            <Col>
              <ProductCard product={productObjTwo} />
            </Col>
            <Col>
              <ProductCard product={productObjFour} />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    )
  }

  return (
    <>
      <div className="d-lg-none">
        <MobileCategorySlider />
      </div>
      <div className="d-none d-lg-block">
        <DesktopCategorySlider />
      </div>
    </>
  )
}

export default ProductSlider
