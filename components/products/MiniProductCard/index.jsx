import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from './MiniProductcard.module.scss'

const MiniProductCard = ({ title, price, sale, thumbnail }) => {
  if (!price) return null

  return (
    <Card className="border-0 text-left">
      <Card.Body className={styles.cardBody}>
        <Row>
          <Col className={styles.productImgWrapper} md={4}>
            <Image className={styles.productImg} src={thumbnail} fluid />
          </Col>
          <Col className="pl-md-0" md={8}>
            <p className={`mb-2 mt-lg-5 ${styles.titleWrapper}`}>
              <small className={`text-muted ${styles.title}`}>{title}</small>
            </p>
            <Card.Subtitle
              className={`${sale && 'text-danger'} ${styles.cardSubtitle}`}
            >
              <span>${sale ? sale.salePrice : price}</span>
              <span>
                {sale && (
                  <small className={`${styles.salePrice} text-muted`}>
                    ${price}
                  </small>
                )}
              </span>
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default MiniProductCard