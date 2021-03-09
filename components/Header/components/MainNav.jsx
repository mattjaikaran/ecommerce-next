import { useState } from 'react'
import { 
  Container,
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button 
} from 'react-bootstrap'
import styles from '../Header.module.scss'

const MainNav = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('search!')
    console.log(searchQuery)
  }

  return (
    <Container className="bg-light" fluid>
      <Container>
        <Navbar className={styles.navbarContainer} expand="lg">
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-3" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3" href="/category/womens">
                Womens
              </Nav.Link>
              <Nav.Link className="mx-3" href="/category/mens">
                Mens
              </Nav.Link>
              <Nav.Link className="mx-3" href="/category/accessories">
                Accessories
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Form onSubmit={handleSubmit} inline>
              <FormControl
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mr-sm-2"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default MainNav