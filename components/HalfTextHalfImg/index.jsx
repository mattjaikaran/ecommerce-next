import Link from 'next/link'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HalfTextHalfImg = () => {
  return (
    <Row className="px-0 mt-md-3">
      <Col md={6} className="align-self-center order-1 order-md-first">
        <div className="px-md-5 mt-3 mt-md-0">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            adipisci? Ad nemo tenetur, natus laborum iusto asperiores quam
            quibusdam atque officia aliquid autem eligendi totam nihil neque
            doloremque minus nisi!
          </p>
          <Link href="/">Shop</Link>
        </div>
      </Col>
      <Col md={6} className="px-0">
        <Image
          layout="responsive"
          width={400}
          height={400}
          src="https://dummyimage.com/400x400/ebebeb/000"
        />
      </Col>
    </Row>
  )
}

export default HalfTextHalfImg