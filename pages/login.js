import Link from 'next/link'
import Layout from '@components/Layout'
import Login from '@components/Login'
import { Row, Col, Card } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <Layout>
      <Row className="mt-5">
        <Col sm={2} />
        <Col sm={8}>
          <Card className="p-md-1 p-lg-5 bg-light">
            <Card.Body>
              <h2 className="mt-3 text-center">Login</h2>
              <Login />
              <div className="mt-3 text-center">
                <Link href="/register">Click here to Register</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={2} />
      </Row>
    </Layout>
  )
}

export default LoginPage