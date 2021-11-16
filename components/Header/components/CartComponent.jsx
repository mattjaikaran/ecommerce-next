import { DropdownButton, Button, Container, Row, Col, Image } from 'react-bootstrap'
import styles from '../Header.module.scss'

const CartComponent = () => {

  const renderCartItems = () => {}

  return (
    <>
    <DropdownButton
      title="Cart"
      variant="light"
      menuAlign="right"
      id="cartDropdown">
      <Container style={{ width: '250px' }}>
        <Row>
          <Col xs={4} sm={3}>
            <Image src={'https://dummyimage.com/100x100/000/fff'} fluid />
          </Col>
          <Col xs={4} sm={6} className="pt-2">
            <small style={{ 
              fontSize: '0.6rem', 
              textTransform: 'none'
              }}>
              Brand Name - Product Name
            </small>
          </Col>
          <Col xs={4} sm={3} className="pt-2">
            <small style={{ 
              fontSize: '0.6rem', 
              textTransform: 'none'
              }}>$49.99</small>
          </Col>
        </Row>
        <Button className="mt-3" block>Checkout</Button>
      </Container>
    </DropdownButton>
    </>
  )
}

export default CartComponent