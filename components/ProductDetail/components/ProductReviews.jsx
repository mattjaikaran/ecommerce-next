import { useState } from 'react'
import { Row, Col, Button, ProgressBar } from 'react-bootstrap'
import '../ProductDetail.module.scss'
import { productReviews, renderReviewAverage } from '../../../copy/reviews'
import ProductReview from './ProductReview'
import NewReviewModal from './NewReviewModal'

const ProductReviews = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const renderProductReviews = () => (
    productReviews.map(({ id, title, date, fit, width, rating, reviewText }) => (
      <ProductReview
        key={id}
        title={title}
        date={date}
        fit={fit}
        width={width}
        rating={rating}
        reviewText={reviewText}
      />
    ))
  )
  
  return (
    <div>
      <Row>
        <Col md={3} lg={3}>
          <h3>Reviews</h3>
          <h5>{renderReviewAverage(productReviews)} out of 5</h5>
          <p>
            <span>Fit Rating:</span> runs slightly large
          </p>
          <p>
            <span>Width Rating:</span> fits true to size
          </p>
        </Col>
        <Col className="mb-3" sm={8} md={6} lg={4} xl={3}>
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
        <Col className="mt-md-3" sm={6} md={3} lg={3}>
          <Button variant="outline-dark btn-xs-block" onClick={handleShow}>
            Write a Review
          </Button>
        </Col>
      </Row>
      <hr className="mt-5" />
      <div className="mt-5">{renderProductReviews()}</div>
      <NewReviewModal show={show} onHide={handleClose} />
    </div>
  )
}

export default ProductReviews