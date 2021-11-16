import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Register from '../components/Register'

const Auth = () => {
  return (
    <Layout>
      <Row>
        <Col md={6}>
          <Login />
        </Col>
        <Col md={6}>
          <Register />
        </Col>
      </Row>
    </Layout>
  )
}

export default Auth