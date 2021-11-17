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
    <Card>
      <Card.Title className="text-center mt-5">
        <h3>Register</h3>
      </Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="registerFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  {...register('First name', { required: true, maxLength: 80 })}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="registerLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  {...register('Last name', { required: true, maxLength: 100 })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
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
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
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
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
      </Card.Body>
    </Card>
    // <>
    //   <Form onSubmit={handleSubmit(onSubmit)}>
    //     <Form.Label>Email address</Form.Label>
    //     <InputGroup controlid="registerEmail">
    //       <Form.Control
    //         className="mb-3"
    //         type="email"
    //         placeholder="Email"
    //         name="email"
    //         ref={register({
    //           required: true,
    //           pattern: /^\S+@\S+$/i,
    //           message: "Enter a valid email"
    //         })} />
    //     </InputGroup>
    //     <Form.Label>Password</Form.Label>
    //     <InputGroup>
    //       <Form.Control
    //         maxLength="10"
    //         minLength="6"
    //         type={passwordShown ? "text" : "password"}
    //         placeholder="Password"
    //         name="password"
    //         ref={register({
    //           required: "You must specify a password",
    //           minLength: {
    //             value: 8,
    //             message: "Password must have at least 8 characters"
    //           }
    //         })} />
    //       <InputGroup.Append>
    //         <InputGroup.Text onClick={togglePasswordVisiblity}>
    //           {passwordShown ? 'Show' : 'Hide'}
    //         </InputGroup.Text>
    //       </InputGroup.Append>
    //     </InputGroup>
    //     {errors.password && (
    //       <Row className="mt-3">
    //         <Alert variant="warning">{errors.password.message}</Alert>
    //       </Row>
    //     )}
    //     <Form.Label className="mt-3">Password Confirmation</Form.Label>
    //     <InputGroup>
    //       <Form.Control
    //         type={passwordConfirmationShown ? "text" : "password"}
    //         placeholder="Password Confirmation"
    //         name="passwordConfirmation"
    //         ref={register({
    //           validate: value => value === password.current || "The passwords do not match"}
    //         )} />
    //       <InputGroup.Append>
    //         <InputGroup.Text onClick={togglePasswordVisiblityTwo}>
    //           {passwordConfirmationShown ? 'Show' : 'Hide'}
    //         </InputGroup.Text>
    //       </InputGroup.Append>
    //     </InputGroup>
    //     <Button variant="primary" type="submit" className="mt-3 btn-xs-block">
    //       Submit
    //     </Button>
    //     <div className="text-center mt-3">
    //       <p>Or</p>
    //       <Button variant="primary">
    //         Facebook
    //       </Button>
    //       <Button
    //         variant="primary"
    //         className="mx-sm-2 mx-lg-5">
    //         Google
    //       </Button>
    //       <Button variant="primary">
    //         Apple
    //       </Button>
    //     </div>
    //     {errors && (
    //       <Row className="mt-3">
    //         {Object.values(errors).map((error, i) => {
    //           console.log('error', error)
    //           console.log('i', i)
    //           return <Alert variant="warning">{error[i].message}</Alert>
    //         })}
    //       </Row>
    //     )}
    //   </Form>
    // </>
  )
}
export default Register