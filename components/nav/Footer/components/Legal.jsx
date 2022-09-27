import { Container, Nav, Row, Col } from "react-bootstrap"
import styles from "../Footer.module.scss"

const Legal = () => {
  return (
    <Container
      className={`bg-light text-center p-5 ${styles.legalContainer}`}
      fluid>
      <p className="px-5 mb-0">&copy; 2021 ShopSite</p>
      <small>All Rights Reserved.</small>
    </Container>
  )
}

export default Legal