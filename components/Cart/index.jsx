import { useState } from 'react'
// import {
//   increaseCartItemQuantity,
//   decreaseCartItemQuantity,
// } from '@/hooks/cartHooks'
import Image from 'next/image'
import { Offcanvas, Button, Row, Col } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Cart.module.scss'

const sampleCartItems = [
  {
    id: 765,
    title: 'Sample Product 1',
    price: 49.99,
  },
  {
    id: 954,
    title: 'Sample Product 2',
    price: 64.99,
  },
  {
    id: 2122,
    title: 'Sample Product 3',
    price: 99.99,
  },
]


function CartDrawer({ name, ...props }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const renderCartItems = () => {
    return sampleCartItems.map((cartItem) => {
      const { id, title, price } = cartItem
      return (
        <Row key={id}>
          <Col xs={3} sm={3}>
            <Image
              src={'https://dummyimage.com/100x100/000/fff'}
              width={100}
              height={100}
              layout="responsive"
            />
          </Col>
          <Col xs={5} sm={6} className="pt-2">
            <p>
              <small
                style={{
                  fontSize: '0.6rem',
                  textTransform: 'none',
                }}
              >
                {title}
              </small>
            </p>
            <p>
              <small
                style={{
                  fontSize: '0.6rem',
                  color: 'red',
                  textTransform: 'none',
                }}
              >
                {price}
              </small>
            </p>
          </Col>
          <Col xs={4} sm={3} className="pt-2">
            <p>
              <span className="mx-3">
                -
              </span>
              <small
                style={{
                  fontSize: '0.6rem',
                  textTransform: 'none',
                }}
              >
                1
              </small>
              <span className="mx-3">
                +
              </span>
            </p>
            <Button size="sm" variant="light">Remove</Button>
          </Col>
          <hr className="my-3" />
        </Row>
      )
    })
  }

  return (
    <>
      <Button variant="primary-outline" onClick={handleShow} className="me-2">
        <AiOutlineShoppingCart />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {renderCartItems()}
          <Button>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

const Cart = () => <CartDrawer placement="end" name="end" scroll />

export default Cart