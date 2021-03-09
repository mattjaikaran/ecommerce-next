import ProductCard from '@components/ProductCard'
import { Row, Col, Carousel, Image, Button } from 'react-bootstrap'
import styles from './CategorySlider.module.scss'

const productObj = {
  id: 1, 
  title: 'Buckle Wrap Wooden Table',
  price: 52,
  quantity: 1,
  sale: {
    salePrice: 40
  },
  newProduct: false,
}
const productObjTwo = {
  id: 2, 
  title: 'Wooden Coffee Mug',
  price: 23.99,
  quantity: 1,
  sale: false,
  newProduct: false,
}
const productObjThree = {
  id: 3, 
  title: 'Wooden Bluetooth Speaker',
  price: 23,
  quantity: 1,
  sale: false,
  newProduct: true,
}
const productObjFour = {
  id: 4, 
  title: 'Wood White Chair',
  price: 45,
  quantity: 1,
  sale: false,
  newProduct: false,
}

const CategorySlider = ({ title, description }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col className="mt-md-5 mb-xs-3" md={3}>
          <h3>{title}</h3>
          <p className="pr-5">
            <small className="text-muted">{description}</small>
          </p>
          <Button>Shop Now</Button>
        </Col>
        <Col md={9} className="px-1">
          <Carousel
            className={styles.categoryCarousel}
            interval={null}
            indicators={false}>
            <Carousel.Item className={styles.categoryCarouselItem}>
              <Row className={styles.categoryCarouselItemRow}>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObj} />
                </Col>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObjTwo} />
                </Col>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObjThree} />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className={styles.categoryCarouselItem}>
              <Row className={styles.categoryCarouselItemRow}>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObj} />
                </Col>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObjTwo} />
                </Col>
                <Col className={`px-md-3 ${styles.categoryCarouselItemRowCol}`}>
                  <ProductCard product={productObjFour} />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CategorySlider