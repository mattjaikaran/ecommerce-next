import { Card, Row, Col, Image } from 'react-bootstrap'
import styles from './MiniProductcard.module.scss'

const MiniProductCard = (props) => {
  const { title, price, sale, thumbnail } = props
  if (!props.price) return null

  return (
    <Card className="border-0 text-left">
      <Card.Body className={styles.cardBody}>
        <Row>
          <Col className={styles.productImgWrapper} xs={3}>
            <Image 
              className={styles.productImg}
              src={thumbnail}
              fluid />
          </Col>
          <Col className="pl-0" xs={9}>
            <p className={`mb-2 ${styles.titleWrapper}`}>
              <small className={`text-muted ${styles.title}`}>
                {title}
              </small>
            </p>
            <Card.Subtitle className={`${sale && 'text-danger'} ${styles.cardSubtitle}`}>
              ${sale ? sale.salePrice : price}
              {sale && 
                <small className={`${styles.salePrice} text-muted`}>
                  ${price}
                </small>}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default MiniProductCard