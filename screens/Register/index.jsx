import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import CustomButton from '@/components/CustomButton'
import { Card, Form, Row, Col, InputGroup } from 'react-bootstrap'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import './Register.module.scss' 

const Register = () => {

  const { register, handleSubmit, errors, watch } = useForm({})
  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordConfirmationShown, setPasswordConfirmationShown] = useState(false)

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = (data, event) => {
    event.preventDefault()
    console.log('data', data)
    console.log('event', event)
  }

  const togglePasswordVisiblity = (event) => {
    event.preventDefault()
    setPasswordShown(!passwordShown)
  }
  const togglePasswordVisiblityTwo = (event) => {
    event.preventDefault()
    setPasswordConfirmationShown(!passwordConfirmationShown)
  }

  if(errors) {
    console.log(errors)
  }

  return (
    <Card border="light">
      <Card.Title className="text-center mt-5">
        <h3>Register</h3>
      </Card.Title>
      <Card.Body>
        <Row>
          <Col sm={0} md={2}></Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="registerFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      {...register('First name', {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="registerLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      {...register('Last name', {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPhone">
                <Form.Label>Phone #</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile number"
                  {...register('Mobile number', {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('Password', { required: true })}
                  />
                  <InputGroup.Text
                    id="basic-addon"
                    onClick={togglePasswordVisiblity}
                  >
                    {passwordShown ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={passwordConfirmationShown ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    {...register('Confirm Password', { required: true })}
                  />
                  <InputGroup.Text
                    id="basic-addon"
                    onClick={togglePasswordVisiblityTwo}
                  >
                    {passwordConfirmationShown ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <CustomButton type="submit" btnText="Register" />
            </Form>
          </Col>
          <Col sm={0} md={2}></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default Register