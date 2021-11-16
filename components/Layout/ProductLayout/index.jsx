import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../Layout.module.scss'

const ProductLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default ProductLayout
