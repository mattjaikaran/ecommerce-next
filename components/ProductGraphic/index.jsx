import Link from 'next/link'
import { Row, Col, Image } from 'react-bootstrap'
import styles from "./ProductGraphic.module.scss"

const ProductGraphic = ({ leftSide, img, description, product, productDescription, cta }) => {
  if (leftSide) {
    return (
      <div className="bg-light text-center p-3 mb-3">
        <Row>
          <Col sm={7} md={6} xl={7} />
          <Col sm={5} md={6} xl={5}>
            <h5 className={styles.title}>
              {description} <span className={styles.product}>{product}</span>
            </h5>
            <div className={styles.productDescriptionContainer}>
              <p>
                <small className={styles.productDescription}>
                  {productDescription}
                </small>
              </p>
              <Link href="/">{cta}</Link>
            </div>
          </Col>
        </Row>
        <Row className={styles.imgContainer}>
          <Col sm={6}>
            <Image src={img} alt="asset" fluid />
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <div className={`bg-light text-center p-3 mb-3 ${styles.productGraphic}`}>
      <Row>
        <Col sm={12}>
          <h5 className={styles.title}>
            {description} <span className={styles.product}>{product}</span>
          </h5>
          <div className={styles.productDescriptionContainer}>
            <p>
              <small className={styles.productDescription}>
                {productDescription}
              </small>
            </p>
            <Link href="/">{cta}</Link>
          </div>
        </Col>
      </Row>
      <Row className={styles.imgContainer}>
        <Col sm={5} />
        <Col sm={7}>
          <Image src={img} alt="asset" fluid />
        </Col>
      </Row>
    </div>
  )
}

export default ProductGraphic