import { useState } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import ProductModal from './components/ProductModal'
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
  // refactor w/ props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { title, price } = props.product

  const handleCart = (e) => {
    e.preventDefault()
    console.log(props.product)
  }
  
  return (
    <div>
      <div className={`${styles.badgeContainer} text-right`}>
        <Badge 
          variant="danger" 
          className={styles.badge}>
          Sale
        </Badge>
      </div>
      <Card className={styles.productCard}>
        <Card.Img variant="top" src="https://dummyimage.com/300x400/000/fff" />
        <Card.Body>
          <Card.Title className="text-muted">
            {title}
          </Card.Title>
          <Card.Subtitle className="mb-3">
            ${price.toFixed(2)}
          </Card.Subtitle>
          <div className="mt-3">
            <Button variant="primary" onClick={handleShow}>
              Quick View
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ProductModal 
        show={show} 
        product={props.product}
        addToCart={handleCart} 
        onHide={handleClose} />
    </div>
  )
}

export default ProductCard