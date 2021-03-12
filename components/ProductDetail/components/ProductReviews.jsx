import { Row, Col, Button, ProgressBar } from 'react-bootstrap'
import '../ProductDetail.module.scss'
import ProductReview from './ProductReview'

const ProductReviews = () => {
  return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <h3>Reviews</h3>
          <h5>4.2 out of 5</h5>
          <p>
            <span className="">Fit Rating:</span> runs slightly large
          </p>
          <p>
            <span className="">Width Rating:</span> fits true to size
          </p>
        </Col>
        <Col sm={6} md={3} lg={3}>
          <Row className="mt-3">
            <Col xs={3}>
              <small>5 stars</small>
            </Col>
            <Col xs={7}>
              <ProgressBar className="mt-1" now={52} />
            </Col>
            <Col className="pl-1" xs={2}>
              <small>52%</small>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={3}>
              <small>4 stars</small>
            </Col>
            <Col xs={7}>
              <ProgressBar className="mt-1" now={22} />
            </Col>
            <Col className="pl-1" xs={2}>
              <small>22%</small>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={3}>
              <small>3 stars</small>
            </Col>
            <Col xs={7}>
              <ProgressBar className="mt-1" now={17} />
            </Col>
            <Col className="pl-1" xs={2}>
              <small>17%</small>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={3}>
              <small>2 stars</small>
            </Col>
            <Col xs={7}>
              <ProgressBar className="mt-1" now={9} />
            </Col>
            <Col className="pl-1" xs={2}>
              <small>9%</small>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={3}>
              <small>1 stars</small>
            </Col>
            <Col xs={7}>
              <ProgressBar className="mt-1" now={0} />
            </Col>
            <Col className="pl-1" xs={2}>
              <small>0%</small>
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={3} lg={3}>
          <Button variant="outline-dark" block>
            Write a Review
          </Button>
        </Col>
      </Row>
      <ProductReview />
      <ProductReview />
      <ProductReview />
    </div>
  )
}

export default ProductReviews