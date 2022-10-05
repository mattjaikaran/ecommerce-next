import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert'
import styles from './NewReviewForm.module.scss'

const NewReviewForm = ({ onHide }) => {
  const target = useRef(null)
  const [show, setShow] = useState(false)
  const [reviewStatus, setReviewStatus] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    } = useForm()

    const onSubmit = (values) => {
      try {
        console.log(JSON.stringify(values, null, 2))
        setReviewStatus('success')
        setTimeout(() => onHide(false), 3000)
      } catch (err) {
        console.log(err)
        console.log(errors)
        setReviewStatus('danger')
      }
    }

    return (
      <Form className={styles.newReviewForm} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="reviewForm.email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="reviewForm.displayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name will be displayed in the review"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mt-2" controlId="reviewForm.size">
          <Form.Label>Size</Form.Label>
          <Form.Select {...register("size")}>
            <option>Select Size</option>
            <option value="x-small">X-Small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mt-2" controlId="reviewForm.reviewHeadline">
          <Form.Label>Review Headline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Review title"
            {...register("reviewHeadline")}
          />
        </Form.Group>
        <Form.Group className="mt-2" controlId="reviewForm.reviewContent">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your thoughts on this product"
            {...register("reviewContent")}
          />
        </Form.Group>
      <Form.Group className="mt-2" controlId="reviewFit">
        <Form.Label>Fit</Form.Label>
        <Form.Range defaultValue={50} {...register("reviewFit")}  />
        <Row className="text-center">
          <Col>Small</Col>
          <Col>Perfect</Col>
          <Col>Big</Col>
        </Row>
      </Form.Group>
      <Form.Group className="mt-2" controlId="reviewQuality">
        <Form.Label>Quality</Form.Label>
        <Form.Range defaultValue={85} {...register("reviewQuality")}  />
        <Row className="text-center">
          <Col>Bad</Col>
          <Col>Ok</Col>
          <Col>Perfect</Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Photos</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <div className="mt-3">
        <p>
          <small>
            By submitting this review, you agree to our{' '}
            <a
              href="#"
              ref={target}
              onClick={(e) => {
                e.preventDefault()
                setShow(!show)
              }}
            >
              Customer Review Terms &amp; Conditions
            </a>
            .
          </small>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                The terms: <br />
                We can do whatever we want with your data
              </Tooltip>
            )}
          </Overlay>
        </p>
      </div>
      <div className={styles.footer}>
        <Button variant="light" onClick={onHide}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Submit Review
        </Button>
      </div>
      <div className="mt-3">
      {reviewStatus === 'success' || reviewStatus === 'danger' ? (
        <Alert variant={reviewStatus}>
          {reviewStatus === 'success'
            ? 'Review submitted successfully'
            : 'There was an error. Try again'}
        </Alert>
      ) : null}
      </div>
    </Form>
  )
}

export default NewReviewForm
