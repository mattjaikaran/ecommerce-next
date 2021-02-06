import { Container } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> 

      <Container>
        {children}
      </Container>
      
      <Footer />
    </div>
  )
}

export default Layout