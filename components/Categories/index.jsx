import { Row, Col} from 'react-bootstrap'
import Category from './components/Category'


const Categories = () => {
  return (
    <div className="text-center mt-5">
      <Row>
        <Col md={9}>
          <Row>
            <Col className="mb-3" xs={12} md={7}>
              <Category img="https://dummyimage.com/650x390/000/fff" />
            </Col>
            <Col className="mb-3" xs={6} md={5}>
              <Category img="https://dummyimage.com/350x300/000/fff" />
            </Col>
            <Col className="mb-3" xs={6} md={5}>
              <Category img="https://dummyimage.com/350x300/000/fff" />
            </Col>
            <Col className="mb-3" md={7}>
              <Category img="https://dummyimage.com/650x390/000/fff" />
            </Col>
          </Row>
        </Col>
        <Col className="mb-3" md={3}>
          <Category img="https://dummyimage.com/450x1020/000/fff" />
        </Col>
      </Row>
    </div>
  )
}

export default Categories