import { Card, Button } from 'react-bootstrap'

const ProductCard = () => {
  // refactor w/ props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$99.99</Card.Subtitle>
        <Card.Text>Some Text</Card.Text>
        <div className="text-center mt-3">
          <Button variant="primary">Quick View</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard