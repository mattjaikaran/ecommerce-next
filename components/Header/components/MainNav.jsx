import { useState } from 'react'
import Link from 'next/link'
import { 
  Container,
  Navbar, 
  Nav, 
  Form, 
  FormControl, 
  Button 
} from 'react-bootstrap'
import CartComponent from './CartComponent'
import { AiOutlineSearch } from 'react-icons/ai'
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
            id="basic-navbar-nav"
          >
            <Nav className={`text-left mx-auto ${styles.navItems}`}>
              <Nav.Link className={styles.navLink} as={Link} href="/">
                Home
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                as={Link}
                href="/category/bedroom"
              >
                Bedroom
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                as={Link}
                href="/category/living-room"
              >
                Living Room
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                as={Link}
                href="/category/dining-room"
              >
                Dining Room
              </Nav.Link>
              <Nav.Link
                className={`${styles.navLink}`}
                as={Link}
                href="/category/kitchen"
              >
                Kitchen
              </Nav.Link>
            </Nav>
            <CartComponent />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default MainNav