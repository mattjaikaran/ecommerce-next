import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiFillStar } from 'react-icons/ai'

// single review
const ProductReview = ({ title, date, fit, width, rating, reviewText }) => {
  const renderRatingStars = () => {
    if (rating === 1) {
      return (
        <>
          <AiFillStar />
        </>
      )
    }
    if (rating === 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      )
    }
    if (rating === 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      )
    }
    if (rating === 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      )
    }
    if (rating === 5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      )
    }
  }
  return (
    <div>
      <Row>
        <Col lg={6}>
          <div>{renderRatingStars()}</div>
          <p className="mt-3">{title}</p>
        </Col>
        <Col lg={6}>
          <p>{date}</p>
          <p>
            Fit: <span>{fit}</span>
          </p>
          <p>Width: {width}</p>
        </Col>
      </Row>
      <p>{reviewText}</p>
      <div>
        <p className="font-weight-bold">Product Imageshere</p>
        {/* {productImages.map(productImg = {})} */}
      </div>
    </div>
  )
}

export default ProductReview
