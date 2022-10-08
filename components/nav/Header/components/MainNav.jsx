import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartButton from '@/components/cart/CartButton'
import { VscColorMode } from 'react-icons/vsc'
import { navigation } from '@/copy/navigation'
import styles from '../Header.module.scss'

const MainNav = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('search!')
    console.log(searchQuery)
  }

  const renderNavItems = () =>
    navigation.map(({ id, title, link }) => (
      <Nav.Link key={id} className={styles.navLink} as={Link} href={link}>
        {title}
      </Nav.Link>
    ))
  return (
    <Container className="bg-light" fluid>
      <Container>
        <Navbar className={styles.navbarContainer} expand="lg">
          <Navbar.Brand href="/">
            <VscColorMode />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className={styles.navbarCollapse}
            id="basic-navbar-nav"
          >
            <Nav className={`text-left mx-auto ${styles.navItems}`}>
              {renderNavItems()}
            </Nav>
            <CartButton />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default MainNav
