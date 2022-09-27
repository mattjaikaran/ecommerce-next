import Link from 'next/link'
import { Container, Nav, Row, Col } from 'react-bootstrap'
import styles from '../Footer.module.scss'

const MainFooter = () => {
  return (
    <Container fluid className={styles.footerContainerFluid}>
      <Container className={`${styles.footerContainer} p-5`} fluid="xl">
        <Row className={styles.footerRow}>
          <Col className={`${styles.footerCol} mb-3`} sm={9} md={9} lg={6}>
            <h6 className={styles.navTitle}>Shop</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              reprehenderit unde voluptatum, architecto sapiente consequuntur
              sit.
            </p>
          </Col>
          <Col className={`${styles.footerCol} mb-3`} sm={4} md={4} lg={2}>
            <Nav className={`flex-column ${styles.navCustom}`}>
              <h6 className={styles.navTitle}>Contact Us</h6>
              <Nav.Link className={styles.navLink} href="/">
                (888) 555-0198
              </Nav.Link>
              <Nav.Link className={styles.navLink} href="link-1">
                info@shop.com
              </Nav.Link>
              <Nav.Link className={styles.navLink} href="link-2">
                123 Broadway NY, NY 10010
              </Nav.Link>
            </Nav>
          </Col>
          <Col className={`${styles.footerCol} mb-3`} sm={4} md={4} lg={2}>
            <Nav className={`flex-column ${styles.navCustom}`}>
              <h6 className={styles.navTitle}>Useful Links</h6>
              <Nav.Link as={Link} className={styles.navLink} href="/about">
                About Shop
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/faq">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/support">
                Support
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={styles.navLink}
                href="/privacy-policy"
              >
                Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>
          <Col className={`${styles.footerCol} mb-3`} sm={4} md={4} lg={2}>
            <Nav className={`flex-column ${styles.navCustom}`}>
              <h6 className={styles.navTitle}>Latest News</h6>
              <Nav.Link as={Link} className={styles.navLink} href="/">
                Active
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/products/1">
                Link
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} href="/products/2">
                Link
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default MainFooter
