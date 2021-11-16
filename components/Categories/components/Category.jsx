import Link from 'next/link'
import cx from 'classnames'
import { Row, Col, Image } from 'react-bootstrap'
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
      <div className={`${colorProp} ${styles.categoryCard} text-left`}>
        <Row className="py-3">
          <Col className="text-left py-4 px-5">
            <p>
              <small>#{hashtag}</small>
            </p>
            <h6>{title}</h6>
            <Link href={link}>Shop Now</Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="pb-3 text-center">
            <Image src={img} fluid />
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <div className={`${colorProp} ${styles.categoryCard}`}>
      <Row className="py-3">
        <Col
          className="text-center"
          xs={{ order: 2, span: 12 }}
          sm={{ order: 2, span: 6 }}
          md={7}>
          <Image className={styles.productImg} src={img} />
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
    </div>
  )
}

export default Category