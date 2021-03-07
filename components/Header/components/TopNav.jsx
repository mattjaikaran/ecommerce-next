import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import styles from '../Header.module.scss'

const TopNav = () => {
  return (
    <Container className={styles.topNavContainer}>
      <Navbar>
        <Row className="w-100">
          <Col className={styles.leftSide} sm={12} md={8}>
            <Navbar.Text>
              <a href="#" className="mr-2">
                <small>(888)-555-0197</small>
              </a>
              <span>•</span>
              <a href="#" className="ml-2">
                <small>info@store.com</small>
              </a>
            </Navbar.Text>
          </Col>
          <Col className={styles.rightSide} sm={12} md={4}>
            <Navbar.Collapse>
              {/* <Nav.Link></Nav.Link> */}
              <Nav.Link href="#">Account</Nav.Link>
              <span>•</span>
              <Nav.Link href="#">Wishlist</Nav.Link>
              <span>•</span>
              <Nav.Link href="#">Blog</Nav.Link>
              <span>•</span>
              <Nav.Link href="#">Login</Nav.Link>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </Container>
  )
}

export default TopNav