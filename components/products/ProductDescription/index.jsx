import { Row, Col } from 'react-bootstrap'

const ProductDescription = () => {
  const details = {
    sizeInfo: [
      `True to size.`,
      `Waist sizing; XS=26-28", S=28-30", M=32-34", L=36-38", XL=40-42", XXL=44-46", 3XL=48-50".`,
      `Mid rise.`,
    ],
    giftOptions: `Choose gift options when you check out. Some items may not be eligible for certain gift wrap options.`,
    detailsAndCare: {
      description: `A soft and stretchy cotton blend means easy comfort in modern jogger pants with versatile appeal.`,
      details: [
        `31" inseam; 10" leg opening; 10 1/2" front rise; 16" back rise (size Medium)`,
        `Elastic/drawstring waist`,
        `Side welt pockets; back zip pocket`,
        `58% cotton, 37% polyester, 5% spandex`,
        `Machine wash, tumble dry`,
        `Imported`,
        `Men's Clothing`,
        `Item #5879637_1`,
      ],
    },
  }

  return (
    <div>
      <Row>
        <Col sm={6}>
          <h5>Size Info</h5>
          <ul>
            {details.sizeInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Col>
        <Col sm={6}>
          <h5>Gift Options</h5>
          <p>{details.giftOptions}</p>
        </Col>
        <Col sm={6}>
          <h5>Details &amp; Care</h5>
          <ul>
            {details.detailsAndCare.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDescription
