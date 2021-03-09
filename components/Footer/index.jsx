import { Container, Nav, Row, Col } from 'react-bootstrap'
import MainFooter from './components/MainFooter'
import Legal from './components/Legal'
import styles from './Footer.module.scss'

const Footer = () => {
  // just build out 2 columns from nordstrom footer
    // Customer Service/About us
    // right side - socials
    //   instagram, pinterest, youtube, facebook
    // add legal links below
  return (
    <Container fluid>
      <MainFooter />
      <Legal />
    </Container>
  )
}

export default Footer