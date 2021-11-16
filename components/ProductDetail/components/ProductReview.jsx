import { Row, Col, Button } from 'react-bootstrap'
import styles from '../ProductDetail.module.scss'


// single review
const ProductReview = ({ title, date, fit, width, review }) => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <p>Stars</p>
          <p className="font-weight-bold">{title}</p>
        </Col>
        <Col lg={6}>
          <p className="">{date}</p>
          <p>
            Fit: <span>{fit}</span>
          </p>
          <p>Width: {width}</p>
        </Col>
      </Row>
      <p>{review}</p>
      <div>
        <p className="font-weight-bold">Product Images</p>
      </div>
    </div>
  )
}

export default ProductReview