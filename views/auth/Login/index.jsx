import Link from 'next/link'
import LoginForm from '@/components/forms/auth/LoginForm'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Login.module.scss'

const Login = () => {
  return (
    <Card border="light">
      <Card.Title className="text-center mt-5">
        <h3>Login</h3>
      </Card.Title>
      <Card.Body>
        <Row>
          <Col sm={0} md={2}></Col>
          <Col sm={0} md={8}>
            <LoginForm />
          </Col>
          <Col sm={0} md={2}></Col>
        </Row>
        <div className="mt-3 text-center">
          <Link href="/register">Forgot Password?</Link>
          <br />
          <Link href="/register">Click here to Register</Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Login
