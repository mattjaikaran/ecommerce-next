import './Register.module.scss'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Container, InputGroup } from 'react-bootstrap';

const Register = () => {

  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false)
  const [passwordShownTwo, setPasswordShownTwo] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  
  const togglePasswordVisiblityTwo = () => {
    setPasswordShownTwo(!passwordShownTwo);
  };

  return <>

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>Email address</Form.Label>
      <InputGroup controlId="registerEmail">
        <Form.Control
          className="mb-3"
          type="email"
          placeholder="email"
          name="email"
          ref={register({
            required: true, pattern:
              /^\S+@\S+$/i
          })} />
      </InputGroup>
      <Form.Label>Password</Form.Label>
      <InputGroup>
        <Form.Control
          maxLength="10"
          minLength="6"
          type={passwordShown ? "text" : "password"}
          placeholder="password"
          name="password" ref={register} />
        <InputGroup.Append>
          <InputGroup.Text onClick={togglePasswordVisiblity}>
            Show
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Form.Label className='mt-3'>Password Confirmation</Form.Label>
      <InputGroup>
        <Form.Control
          type={passwordShownTwo ? "text" : "password"}
          placeholder="password confirmation"
          name="passwordConfirmation"
          ref={register({ max: 0 })} />
        <InputGroup.Append>
          <InputGroup.Text onClick={togglePasswordVisiblityTwo}>
            Show
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="primary" type="submit" className='mt-3'>
        Submit
      </Button>
      <Container className='button_Container mt-3'>
        <Row>
          <Button variant="primary" size="md">
            FaceBook
          </Button>
          <Button variant="primary" size="md"
            className=" mx-5">
            Google
          </Button>
          <Button variant="primary" size="md">
            Apple
          </Button>
        </Row>
      </Container>
    </Form>
  </>
}
export default Register