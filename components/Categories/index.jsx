import { Row, Col} from 'react-bootstrap'
import Category from './components/Category'


const Categories = () => {
  return (
    <div>
      Categories
      <Row>
        <Col>
          <Category />
        </Col>
        <Col>
          <Category />
        </Col>
      </Row>
    </div>
  )
}

export default Categories