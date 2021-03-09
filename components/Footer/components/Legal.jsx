import { Container, Nav, Row, Col } from "react-bootstrap"
import styles from "../Footer.module.scss"

const Legal = () => {
  return (
    <Container className={`bg-light text-center p-5 ${styles.legalContainer}`} fluid>
      <p>
        &copy; 2021 ShopSite, All Rights Reserved.
      </p>
    </Container>
  )
}

export default Legal