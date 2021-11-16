import Link from 'next/link'
import cx from 'classnames'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from '../Categories.module.scss'


// single category
const Category = ({ color, hashtag, img, title, link, imgRight }) => {
  let colorProp =
    color === "pink"
      ? styles.pink
      : color === "teal"
      ? styles.teal
      : color === "green"
      ? styles.green
      : color === "purple"
      ? styles.purple
      : color === "yellow"
      ? styles.yellow
      : null

  if (imgRight) {
    return (
      <Container className={`${colorProp} ${styles.categoryCard} text-left`} fluid>
        <Row className="py-3 px-0">
          <Col className="text-left pt-3 px-5">
            <p>
              <small>#{hashtag}</small>
            </p>
            <h6>{title}</h6>
            <Link href={link}>Shop Now</Link>
          </Col>
          <Col sm={12} className="pb-3 text-center mt-5 px-0">
            <Image src={img} fluid />
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Container className={`${colorProp} ${styles.categoryCard}`} fluid>
      <Row className="py-3 px-0">
        <Col
          className="text-center"
          xs={{ order: 2, span: 12 }}
          sm={{ order: 2, span: 6 }}
          md={7}>
          <Image className={`${styles.productImg}`} src={img} fluid />
        </Col>
        <Col
          className="text-left pt-5 pr-sm-0 pl-5"
          xs={{ order: 1, span: 12 }}
          sm={{ order: 1, span: 6 }}
          md={5}>
          <p>
            <small>#{hashtag}</small>
          </p>
          <h6>{title}</h6>
          <Link href={link}>Shop Now</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Category