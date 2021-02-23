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

const CategorySlider = (props) => {
  return (
    <div className="mt-3 p-5">
      <Row>
        <Col sm={4}>
          <h3>{props.title}</h3>
          <p className="pr-5">
            <small className="text-muted">
              {props.description}
            </small>
          </p>
          <Button>Shop Now</Button>
        </Col>
        <Col sm={8}>
          <Carousel 
            interval={null}
            indicators={false}>
            <Carousel.Item>
              <Row>
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
            <Carousel.Item>
              <Row>
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
        </Col>

      </Row>
    </div>
  )
}

export default CategorySlider