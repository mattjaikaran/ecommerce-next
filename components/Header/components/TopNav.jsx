import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import styles from '../Header.module.scss'

const TopNav = () => {
  return (
    <Container className={styles.topNavContainer}>
      <Row>
        <Col md={6} lg={8} className={styles.leftSide}>
          <Nav activeKey="/home">
            <Nav.Link href="#">
              <small>(888)-555-0197</small>
            </Nav.Link>
            <span className="pt-2">•</span>
            <Nav.Link href="#">
              <small>info@store.com</small>
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={6} lg={4} className={styles.rightSide}>
          <Nav activeKey="/home">
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
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default TopNav