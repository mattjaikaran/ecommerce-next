import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../Header.module.scss'

const TopNav = () => {
  return (
    <Container className={styles.topNavContainer}>
      <Row>
        <Col md={5} lg={6} xl={8} className={styles.leftSide}>
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
        <Col md={7} lg={6} xl={4} className={styles.rightSide}>
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
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default TopNav