import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import CartComponent from './CartComponent'
import styles from '../Header.module.scss'

const TopNav = () => {
  return (
    <Container className={styles.topNavContainer}>
      <Row className="text-center">
        <Col md={5} lg={6} xl={7} className={styles.leftSide}>
          <Nav>
            <Nav.Link href="#">
              <small>(888)-555-0197</small>
            </Nav.Link>
            <span className="pt-2">•</span>
            <Nav.Link href="#">
              <small>info@store.com</small>
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={7} lg={6} xl={5} className={styles.rightSide}>
          <Nav>
            <Nav.Link href="#">
              <small>Account</small>
            </Nav.Link>
            <span className="pt-2">•</span>
            <Nav.Link href="#">
              <small>Wishlist</small>
            </Nav.Link>
            <span className="pt-2">•</span>
            <Nav.Link href="#">
              <small>Blog</small>
            </Nav.Link>
            <span className="pt-2">•</span>
            <Nav.Link href="/login">
              <small>Login</small>
            </Nav.Link>
            <CartComponent className="ml-auto" />
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default TopNav