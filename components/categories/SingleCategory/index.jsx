import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './SingleCategory.module.scss'

// single category
const SingleCategory = ({ color, hashtag, img, title, link, imgRight }) => {
  let colorProp =
    color === 'pink'
      ? styles.pink
      : color === 'teal'
      ? styles.teal
      : color === 'green'
      ? styles.green
      : color === 'purple'
      ? styles.purple
      : color === 'yellow'
      ? styles.yellow
      : null

  if (imgRight) {
    return (
      <Container
        className={`${colorProp} ${styles.categoryCard} text-left`}
        fluid
      >
        <Container>
          <Row className="py-5 px-0">
            <Col className="text-left pt-md-3">
              <p>
                <small>#{hashtag}</small>
              </p>
              <h6>{title}</h6>
              <Link href={link}>Shop Now</Link>
            </Col>
            <Col sm={12} className="pb-3 text-center mt-5 px-0">
              <Image src={img} layout="responsive" />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
  return (
    <Container className={`${colorProp} ${styles.categoryCard}`} fluid>
      <Container>
        <Row className="py-5 py-sm-5 py-md-5 px-0">
          <Col
            className="text-center"
            xs={{ order: 2, span: 12 }}
            sm={{ order: 2, span: 6 }}
            md={7}
          >
            <Image
              className={`${styles.productImg}`}
              src={img}
              width={600}
              height={400}
              layout="responsive"
            />
          </Col>
          <Col
            className="text-left pt-3 pb-5 pt-sm-3 pr-sm-0 pl-5"
            xs={{ order: 1, span: 12 }}
            sm={{ order: 1, span: 6 }}
            md={5}
          >
            <p>
              <small>#{hashtag}</small>
            </p>
            <h6>{title}</h6>
            <Link href={link}>Shop Now</Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default SingleCategory
