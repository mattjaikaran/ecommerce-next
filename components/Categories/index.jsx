import { Row, Col} from 'react-bootstrap'
import Category from './components/Category'


const Categories = () => {
  return (
    <div className="text-center mt-5">
      <Row>
        <Col md={9}>
          <Row>
            <Col className="mb-3" xs={12} md={7}>
              <Category img="https://dummyimage.com/650x390/f1d1d0/000" />
            </Col>
            <Col className="mb-3" xs={6} md={5}>
              <Category img="https://dummyimage.com/350x300/c7ffd8/000" />
            </Col>
            <Col className="mb-3" xs={6} md={5}>
              <Category img="https://dummyimage.com/350x300/6ddccf/000" />
            </Col>
            <Col className="mb-3" md={7}>
              <Category img="https://dummyimage.com/650x390/a7c5eb/000" />
            </Col>
          </Row>
        </Col>
        <Col className="mb-3" md={3}>
          <Category img="https://dummyimage.com/450x1020/ffefa1/000" />
        </Col>
      </Row>
    </div>
  )
}

export default Categories