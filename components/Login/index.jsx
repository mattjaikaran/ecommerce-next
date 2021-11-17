import { useForm } from 'react-hook-form'
import CustomButton from '@/components/CustomButton'
import { Card, Form } from 'react-bootstrap'
import './Login.module.scss'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example'))
  return (
    <Card>
      <Card.Title className="text-center mt-5">
        <h3>Login</h3>
      </Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('Password', { required: true })}
            />
          </Form.Group>
          <CustomButton type="submit" btnText="Login" />
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login