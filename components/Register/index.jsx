import './Register.module.scss'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Container, Alert } from 'react-bootstrap';

const Register = () => {

  const { register, handleSubmit } = useForm();
  const [pwError, setPwError] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setPwError(data)
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return <>

    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          name="email"
          ref={register({
            required: true, pattern:
              /^\S+@\S+$/i
          })}
        />
      </Form.Group>
      <Form.Group controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          maxLength="10"
          minLength="6"
          type={passwordShown ? "text" : "password"}
          placeholder="password"
          name="password" ref={register} />
      </Form.Group>
      <Form.Check
        onChange={togglePasswordVisiblity}
        type="checkbox"
        label="view pw" />
      <Form.Group controlId="confirmpassword">
        <Form.Label
          className='mt-3'>
          Password Confirmation</Form.Label>
        <Form.Control
          type={passwordShown ? "text" : "password"}
          placeholder="password confirmation"
          name="passwordconfirmation"
          ref={register({ max: 0 })} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
        </Button>
      <Container className='button_Container mt-3'>
        <Row>
          <Button variant="primary" size="md"
            className="ml-3">
            FaceBook
    </Button>{' '}
          <Button variant="primary" size="md"
            className="ml-3">
            Google
    </Button>{' '}
          <Button variant="primary" size="md"
            className="ml-3">
            Apple
    </Button>{' '}
        </Row>
        {pwError.password !==
          pwError.passwordconfirmation ?
          <Alert className="mt-3" variant={'warning'}>passwords do not match</Alert> : ''}
      </Container>
    </form>
  </>
}
export default Register