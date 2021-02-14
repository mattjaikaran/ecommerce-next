import './Register.module.scss'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Container } from 'react-bootstrap';

const Register = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      </Form.Group>
      <Form.Group controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Passworcd" ref={register} />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password Confirmation" name="Password Confirmation" ref={register({ max: 0 })} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
        </Button>
      <Container  className='button_Container mt-3'>
        <Row>
          <Button variant="primary" size="md" className="ml-3">
            FaceBook
    </Button>{' '}
          <Button variant="primary" size="md" className="ml-3">
            Twitter
    </Button>{' '}
          <Button variant="primary" size="md" className="ml-3">
            Whatever
    </Button>{' '}
        </Row>
      </Container>
    </form>
  </>
}

export default Register