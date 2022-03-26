import { addToCart } from '../../../hooks/addToCart'
import { 
  Modal, 
  Carousel, 
  Container, 
  Row, 
  Col, 
  Image, 
  Button 
} from 'react-bootstrap'

const slides = [
  {
    id: 1,
    img: 'https://dummyimage.com/800x400/ebebeb/000',
    title: 'First Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'Second Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    img: 'https://dummyimage.com/800x400/ccc/000',
    title: 'Third Slide',
    description: '',
  },
]

const ProductModal = (props) => {
  const { product, onHide } = props

  const renderSliderImages = () => {
    return slides.map(slide => {
      const { id, img, title } = slide
      return (
        <Carousel.Item key={id}>
          <Image
            className="d-block w-100"
            src={img}
            alt={title}
          />
        </Carousel.Item>
      )
    })
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Carousel 
            interval={null}
            controls={false}
            fade={true}>
            {renderSliderImages()}
          </Carousel>
          <Row>
            <Col>
              <p>ID: {product.id}</p>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => addToCart(props.product)}>Add to Cart</Button>
        <Button variant="light" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductModal