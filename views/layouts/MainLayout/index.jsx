import { Container } from 'react-bootstrap'
import Header from '@/components/nav/Header'
import Footer from '@/components/nav/Footer'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Container fluid="xl">{children}</Container>
      <Footer />
    </div>
  )
}

export default MainLayout
