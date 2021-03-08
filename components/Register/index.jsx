import './Register.module.scss'
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, Row, Container, InputGroup, Alert } from 'react-bootstrap'

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
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Email address</Form.Label>
        <InputGroup controlid="registerEmail">
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: true, 
              pattern: /^\S+@\S+$/i,
              message: "Enter a valid email"
            })} />
        </InputGroup>
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            maxLength="10"
            minLength="6"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            name="password" 
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })} />
          <InputGroup.Append>
            <InputGroup.Text onClick={togglePasswordVisiblity}>
              {passwordShown ? 'Show' : 'Hide'}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        {errors.password && (
          <Row className="mt-3">
            <Alert variant="warning">{errors.password.message}</Alert>
          </Row>
        )}
        <Form.Label className="mt-3">Password Confirmation</Form.Label>
        <InputGroup>
          <Form.Control
            type={passwordConfirmationShown ? "text" : "password"}
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            ref={register({
              validate: value => value === password.current || "The passwords do not match"}
            )} />
          <InputGroup.Append>
            <InputGroup.Text onClick={togglePasswordVisiblityTwo}>
              {passwordConfirmationShown ? 'Show' : 'Hide'}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
        <Row className="mt-3">
          <Button variant="primary" size="md">
            FaceBook
          </Button>
          <Button 
            variant="primary" 
            size="md"
            className="mx-xs-3 mx-sm-3 mx-md-5">
            Google
          </Button>
          <Button variant="primary" size="md">
            Apple
          </Button>
        </Row>
        {errors && (
          <Row className="mt-3">
            {Object.values(errors).map((error, i) => {
              console.log('error', error)
              console.log('i', i)
              return <Alert variant="warning">{error[i].message}</Alert>
            })}
          </Row>
        )}
      </Form>
    </>
  )
}
export default Register