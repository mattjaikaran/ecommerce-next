import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegisterForm from '@/components/forms/auth/RegisterForm'
import './Register.module.scss'

const Register = () => {
  return (
    <Card border="light">
      <Card.Title className="text-center mt-5">
        <h3>Register</h3>
      </Card.Title>
      <Card.Body>
        <Row>
          <Col sm={0} md={2}></Col>
          <Col md={8}>
            <RegisterForm />
          </Col>
          <Col sm={0} md={2}></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default Register
