import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import './Login.module.scss'

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email" 
            name="Email" 
            ref={register({required: true, min: 8})} />
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" 
            placeholder="Password" 
            name="password" 
            ref={register({min: 6})} />
        </Form.Group>
        <Form.Group controlId="loginRemember">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login