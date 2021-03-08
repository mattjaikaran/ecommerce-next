import Link from 'next/link'
import cx from 'classnames'
import { Row, Col, Image } from 'react-bootstrap'
import styles from '../Categories.module.scss'


// single category
const Category = (props) => {
  const { color, hashtag, img, title, link, imgRight } = props

  let colorProp = color === 'pink' ? styles.pink :
    color === 'teal' ? styles.teal :
    color === 'green' ? styles.green :
    color === 'purple' ? styles.purple :
    color === 'yellow' ? styles.yellow : null

  if (imgRight) {
    return (
      <div className={`${colorProp} ${styles.categoryCard} text-left`}>
        <Row className="p-5">
          <Col>
            <p>
              <small>#{hashtag}</small>
            </p>
            <h6>{title}</h6>
            <Link href={link}>Shop Now</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={img} fluid />
          </Col>
        </Row>
      </div>
    )
  }
    return (
      <div className={`${colorProp} ${styles.categoryCard} text-left`}>
        <Row className="p-5">
          <Col xs={{ order: 2 }} sm={{ order: 2 }} md={6}>
            <Image className={styles.productImg} src={img} />
          </Col>
          <Col xs={{ order: 1 }} sm={{ order: 1 }} md={6}>
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