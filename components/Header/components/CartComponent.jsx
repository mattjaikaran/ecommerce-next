import { Dropdown, DropdownMenu, Button, ButtonGroup, Container, Row, Col, Image } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from '../Header.module.scss'

const CartComponent = () => {

  const CartDetails = ({ align, style }) => (
    <Dropdown align={align} id="dropdown-split-basic">
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
        <AiOutlineShoppingCart className="mx-2" aria-label="Cart Icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu style={style}>
        <Dropdown.Item href="#">
          <Row>
            <Col xs={3} sm={3}>
              <Image src={'https://dummyimage.com/100x100/000/fff'} fluid />
            </Col>
            <Col xs={5} sm={6} className="pt-2">
              <p>
                <small
                  style={{
                    fontSize: '0.6rem',
                    textTransform: 'none',
                  }}
                >
                  Brand Name - Product Name
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
                  $49.99
                </small>
              </p>
            </Col>
            <Col xs={4} sm={3} className="pt-2">
              <p>
                <span className="mx-3">-</span>
                <small
                  style={{
                    fontSize: '0.6rem',
                    textTransform: 'none',
                  }}
                >
                  1
                </small>
                <span className="mx-3">+</span>
              </p>
            </Col>
          </Row>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

  return (
    <>
      <div className="d-xs-none">
        <CartDetails align="end" style={{ width: '400px' }} />
      </div>
      <div className="d-xs-block d-sm-none">
        <CartDetails align="start" style={{ width: '350px' }} />
      </div>
    </>
  )
}

export default CartComponent