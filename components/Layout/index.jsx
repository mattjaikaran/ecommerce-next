import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Container fluid="xl">{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout