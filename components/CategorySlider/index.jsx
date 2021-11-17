import ProductCard from '@/components/ProductCard'
import { productObj, productObjTwo, productObjThree, productObjFour } from '../../copy/products'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import styles from './CategorySlider.module.scss'

const CategorySlider = ({ title, description }) => {

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
    <Container className="mt-3">
      <Row>
        <Col className={`${styles.categoryDescription} mt-md-5 mb-5`} md={3}>
          <h5 className="font-weight-light">{title}</h5>
          <p className="pr-5">
            <small className="text-muted">{description}</small>
          </p>
          <Button className="btn-xs-block">Shop Now</Button>
        </Col>
        <Col md={9} className="">
          <div className="d-lg-none">
            <MobileCategorySlider />
          </div>
          <div className="d-none d-lg-block">
            <DesktopCategorySlider />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CategorySlider