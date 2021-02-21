import { useState } from 'react'
import { Card, Row, Col, Modal, Badge, Button } from 'react-bootstrap'
import ProductModal from './components/ProductModal'
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { title, price, sale, newProduct } = props.product

  const handleCart = (e) => {
    console.log(props.product)
  }

  const renderBadge = () => {
    if (newProduct) {
      return (
         <Col>
          <div className={`${styles.badgeContainer} text-left ml-2`}>
            <Badge 
              variant="success" 
              className={styles.badge}>
              New
            </Badge>
          </div>
        </Col>
      )
    }
    if (sale) {
      return (
        <Col>
          <div className={`${styles.badgeContainer} text-right mr-2`}>
            <Badge 
              variant="danger" 
              className={styles.badge}>
              Sale
            </Badge>
          </div>
        </Col>
      )
    }
  }

  return (
    <div className={`${styles.productCardContainer} mt-3`}>
      <Row>
        {renderBadge()}
      </Row>
      <Card className={`${styles.productCard} ${!sale && !newProduct ? 'mt-3' : ''}`}>
        <Card.Img variant="top" src="https://dummyimage.com/275x360/ccc/000" fluid="true" />
        <Card.Body className="d-flex flex-column pt-2 px-0">
          <Card.Title className="text-muted h6">
            {title}
          </Card.Title>
          <Card.Subtitle>
            ${price.toFixed(2)}
            {sale && <small className={styles.salePrice}>${sale.salePrice.toFixed(2)}</small>}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <div className={styles.addToCartBtnWrapper}>
        <Button variant="outline-secondary" className={styles.addToCartBtn} onClick={handleCart}>Add To Cart</Button>
      </div>
      <Button className={styles.quickView} variant="primary" onClick={handleShow}>
        Quick View
      </Button>
      <ProductModal 
        show={show} 
        product={props.product}
        addToCart={handleCart} 
        onHide={handleClose} />
    </div>
  )
}

export default ProductCard