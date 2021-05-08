import { useState } from 'react'
import { 
  Container,
  Navbar, 
  Nav, 
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
          <Navbar.Collapse
            className={styles.navbarCollapse}
            id="basic-navbar-nav">
            <Nav className={`text-left mx-auto ${styles.navItems}`}>
              <Nav.Link className={`${styles.navLink}`} href="/">
                Home
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                href="/category/bedroom">
                Bedroom
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                href="/category/living-room">
                Living Room
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                href="/category/dining-room">
                Dining Room
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                href="/category/kitchen">
                Kitchen
              </Nav.Link>
            </Nav>
            {/* <Form onSubmit={handleSubmit} inline>
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
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default MainNav