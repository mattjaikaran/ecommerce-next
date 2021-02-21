import { useState } from 'react'
import { addToCart } from '../../hooks/addToCart'
import { Card, Row, Col, Badge, Button } from 'react-bootstrap'
import ProductModal from './components/ProductModal'
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { title, price, sale, newProduct } = props.product

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
      <div className={styles.addToCartBtnWrapper}>
        <Button 
          variant="outline-secondary" 
          className={styles.addToCartBtn} 
          onClick={() => addToCart(props.product)}>
          Add To Cart
        </Button>
      </div>
      <Row>
        {renderBadge()}
      </Row>
      <Card className={`${styles.productCard} ${!sale && !newProduct ? 'mt-3' : ''}`}>
        <Card.Img variant="top" src="https://dummyimage.com/275x360/ccc/000" fluid="true" />
        <Card.Body className={`${styles.cardBody} d-flex flex-column pt-2 px-0`}>
          <Card.Title className={`${styles.cardTitle} text-muted`}>
            {title}
          </Card.Title>
          <Card.Subtitle className={`${styles.cardSubtitle}`}>
            <span className={`${sale && 'text-danger'}`}>${price.toFixed(2)}</span>
            {sale && <small className={styles.salePrice}>${sale.salePrice.toFixed(2)}</small>}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Button className={styles.quickView} variant="primary" onClick={handleShow}>
        Quick View
      </Button>
      <ProductModal 
        show={show} 
        product={props.product}
        onHide={handleClose} />
    </div>
  )
}

export default ProductCard