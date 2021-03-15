import { useState, useRef } from 'react'
import { Modal, Form, Overlay, Tooltip, Button } from 'react-bootstrap'

const NewReviewModal = (props) => {
  const [reviewEmail, setReviewEmail] = useState('')
  const [reviewName, setReviewName] = useState('')
  const [reviewHeadline, setReviewHeadline] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviewFitRange, setReviewFitRange] = useState(0)

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleSubmitReview = (e) => {
    e.preventDefault()
    console.log('Review Submitted!')
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Write a Review</h4>
        <p>
          Product Name
        </p>
        <Form onSubmit={handleSubmitReview}>
          <Form.Group controlId="reviewForm.email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com"
              value={reviewEmail}
              onChange={e => setReviewEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="reviewForm.displayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your name will be displayed in the review"
              value={reviewName}
              onChange={e => setReviewName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="reviewForm.size">
            <Form.Label>Size</Form.Label>
            <Form.Control as="select">
              <option>X-Small</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="reviewForm.reviewHeadline">
            <Form.Label>Review Headline</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your name will be displayed in the review"
              value={reviewHeadline}
              onChange={e => setReviewHeadline(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="reviewForm.reviewText">
            <Form.Label>Review</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3}
              value={reviewText}
              placeholder="Write your thoughts on this product"
              onChange={e => setReviewText(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="reviewRange">
            <Form.Label>How does it fit?</Form.Label>
            <Form.Control 
              type="range"
              value={reviewFitRange}
              onChange={e => setReviewFitRange(e.target.value)} />
          </Form.Group>
        </Form>
        <p>
          <small>
            By submitting this review, you agree to our 
            <a href="#" 
              ref={target} 
              onClick={(e) => {
                e.preventDefault()
                setShow(!show)
              }}>
              {' '}Customer Review Terms &amp; Conditions
            </a>.
          </small>
          <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example"  {...props}>
              The terms: <br /> 
              We can do whatever we want with your data
            </Tooltip>
          )}
        </Overlay>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">Submit Review</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewReviewModal