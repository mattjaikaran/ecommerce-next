import Link from 'next/link'
import { Row, Col, Image } from 'react-bootstrap'
import styles from './LeftSideImgCard.module.scss'

const LeftSideImgCard = ({ img, description, product, productDescription, cta }) => {
  return (
    <Row className="bg-light text-center">
      <Col span={5}>
        <Image src={img} alt="asset" fluid />
      </Col>
      <Col span={7}>
        <h3 className={styles.title}>
          {description} <span className={styles.product}>{product}</span>
        </h3>
        <p className={styles.productDescription}>
          <small>{productDescription}</small>
        </p>
        <Link href="/">{cta}</Link>
      </Col>
    </Row>
  )
}

export default LeftSideImgCard