import NewReviewForm from '@/components/forms/products/NewReviewForm'
import Modal from 'react-bootstrap/Modal'

const NewReviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="new-review-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="new-review-modal">
          Write a review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewReviewForm {...props} />
      </Modal.Body>
    </Modal>
  )
}

export default NewReviewModal
