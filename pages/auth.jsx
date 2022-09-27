import { Row, Col } from 'react-bootstrap'
import Layout from '@/views/layouts/MainLayout'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

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