import { useState } from 'react'
import { addToCart } from '../../hooks/addToCart'
import { Card, Row, Col, Badge, Image, Button } from 'react-bootstrap'
import ProductModal from './components/ProductModal'
import ShoppingCart from '@icons/shopping-cart.svg'
import View from '@icons/view.svg'
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
    <div className={`${styles.productCardContainer}`}>
      <Row>
        {renderBadge()}
      </Row>
      <Card onClick={handleShow} className={`${styles.productCard} ${!sale && !newProduct ? 'mt-3' : ''}`}>
        <Card.Img variant="top" src="https://dummyimage.com/275x360/ccc/000" fluid="true" />
        <Card.Body className={`${styles.cardBody} d-flex flex-column pt-2 px-0`}>
          <Card.Title className={`${styles.cardTitle} text-muted`}>
            {title}
          </Card.Title>
          <Card.Subtitle className={`${styles.cardSubtitle}`}>
            <span className={`${sale && 'text-danger'}`}>${sale ? sale.salePrice.toFixed(2) : price.toFixed(2)}</span>
            {sale && <small className={styles.salePrice}>${price.toFixed(2)}</small>}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <div className={styles.addToCartBtnWrapper}>
        <Button 
          variant="outline-secondary" 
          className={styles.addToCartBtn} 
          onClick={() => addToCart(props.product)}>
          <span>Add To Cart</span>
          {/* <Image src={ShoppingCart} className={styles.shoppingCartIcon} alt="cart" /> */}
        </Button>
         <Button className={styles.quickView} variant="primary" onClick={handleShow}>
          Quick View
          {/* <Image src={View} className={styles.shoppingCartIcon} alt="cart" /> */}
        </Button>
      </div>
       {/* <Button className={`${styles.quickViewDesktop} d-xs-none`} variant="primary" onClick={handleShow}>
        Quick View
      </Button> */}
      <ProductModal 
        show={show} 
        product={props.product}
        onHide={handleClose} />
    </div>
  )
}

export default ProductCard