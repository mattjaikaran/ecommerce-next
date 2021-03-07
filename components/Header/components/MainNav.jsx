import { useState } from 'react'
import { 
  Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button 
} from 'react-bootstrap'
import styles from '../Header.module.scss'

const MainNav = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('search!')
  }

  return (
    <Navbar className={styles.navbarContainer} bg="light" expand="lg">
      <Container>
        <Row className="w-100">
          <Col className={styles.brandContainer} xs={9} sm={9} md={2}>
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
          </Col>

          <Col className={styles.toggleDropdownContainer} xs={3} sm={3} md={10}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Row>
                <Col md={7}>
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Womens</Nav.Link>
                    <Nav.Link href="#link">Mens</Nav.Link>
                    <Nav.Link href="#link">Accessories</Nav.Link>
                    <Nav.Link href="#link">Jewelry</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Col>
                <Col sm={12} md={5}>
                  <Form inline onSubmit={handleSubmit}>
                    <FormControl
                      type="text"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-success" type="submit">
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default MainNav
