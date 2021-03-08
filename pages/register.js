import Link from "next/link"
import Layout from "@components/Layout"
import Register from "@components/Register"
import { Row, Col, Card } from "react-bootstrap"

const RegisterPage = () => {
  return (
    <Layout>
      <Row className="mt-5 text-center">
        <Col sm={2} />
        <Col sm={8}>
          <Card className="p-5 bg-light">
            <Card.Body>
              <h2 className="mt-3">Register</h2>
              <Register />
              <div className="mt-3">
                <Link href="/login">Click here to Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={2} />
      </Row>
    </Layout>
  )
}

export default RegisterPage
