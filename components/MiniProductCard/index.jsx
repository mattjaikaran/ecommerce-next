import { Card, Row, Col, Image } from 'react-bootstrap'
import styles from './MiniProductcard.module.scss'

const MiniProductCard = (props) => {
  console.log('miniproductcard props', props)
  return (
    <p>mini product</p>
  )
  // const { title, price, sale, thumbnail } = props
  // return (
  //   <Card className="border-0" style={{ width: '18rem' }}>
  //     <Card.Body>
  //       <Row>
  //         <Col xs={3}>
  //           <Image 
  //             className={styles.productImg}
  //             src={thumbnail}
  //             fluid />
  //         </Col>
  //         <Col className="pl-0" xs={9}>
  //           <p className="mb-2">
  //             <small className="text-muted">{title}</small>
  //           </p>
  //           <Card.Subtitle className={`${sale && 'text-danger'}`}>
  //             ${sale ? sale.salePrice.toFixed(2) : price.toFixed(2)}
  //             { sale && 
  //               <small className={`${styles.salePrice} text-muted`}>
  //                 ${price.toFixed(2)}
  //               </small>}
  //           </Card.Subtitle>
  //         </Col>
  //       </Row>
  //     </Card.Body>
  //   </Card>
  // )
}

export default MiniProductCard