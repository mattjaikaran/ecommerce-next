import { Row, Col, Button } from 'react-bootstrap'
import styles from '../ProductDetail.module.scss'


// single review
const ProductReview = (props) => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <p>Stars</p>
          <p className="font-weight-bold">{props.title}</p>
        </Col>
        <Col>
          <p className="">{props.date}</p>
          <p>Fit: {props.fit}</p>
          <p>Width: {props.width}</p>
        </Col>
      </Row>
      <p>{props.review}</p>
      <div>
        <p className="font-weight-bold">Product Images</p>
      </div>
    </div>
  )
}

export default ProductReview