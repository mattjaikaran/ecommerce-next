import Link from 'next/link'
import { Row, Col, Image } from 'react-bootstrap'

const LeftSideImgCard = () => {
  return (
    <Row className="text-center">
      <Col span={5}>
        <Image 
          src="https://dummyimage.com/600x400/000/fff"
          alt="asset"
          fluid />
      </Col>
      <Col span={7}>
        <Image 
          src="https://dummyimage.com/60x40/000/fff"
          alt="logo"
          fluid />
          <p>Lorem Ipsum</p>
          <Link href="/">See More</Link>
      </Col>
    </Row>
  )
}

export default LeftSideImgCard