import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container fluid="xl" className="my-3">{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout