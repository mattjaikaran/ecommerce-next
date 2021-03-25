import { useState } from 'react'
import { Row, Col, Button, ProgressBar } from 'react-bootstrap'
import '../ProductDetail.module.scss'
import ProductReview from './ProductReview'
import NewReviewModal from './NewReviewModal'

const ProductReviews = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Row>
        <Col md={3} lg={3}>
          <h3>Reviews</h3>
          <h5>4.2 out of 5</h5>
          <p>
            <span className="">Fit Rating:</span> runs slightly large
          </p>
          <p>
            <span className="">Width Rating:</span> fits true to size
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
          <Button variant="outline-dark" onClick={handleShow} block>
            Write a Review
          </Button>
        </Col>
      </Row>
      <ProductReview
        title="This product is awesome. I love it."
        date="Jan 24, 2020"
        fit="true to size"
        width="slightly small"
        review="The shoes are very nice looking but they started squeaking after a couple of hours of wearing them. I would recommend buying a different boot."
      />
      <ProductReview
        title="This product is terrible. I hate it."
        date="Jan 24, 2020"
        fit="slightly large"
        width="slightly large"
        review="Ordered the black leather 1st. Boot looks, fits so good, ordered the black, gray, tan suede. Looks like the more expensive boot costing 3-4-5x's more. L"
      />
      <ProductReview
        title="This product is ok."
        date="Jan 24, 2020"
        fit="slightly small"
        width="slightly small"
        review="This one is almost perfect."
      />
      <NewReviewModal show={show} onHide={handleClose} />
    </div>
  )
}

export default ProductReviews