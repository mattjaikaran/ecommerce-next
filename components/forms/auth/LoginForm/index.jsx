import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import CustomButton from '@/components/shared/CustomButton'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data, event) => {
    console.log('data', data)
    console.log('event', event)
  }
  errors && console.log(errors)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
      </Form.Group>
      {errors.message && <Alert variant="danger">{errors.message}</Alert>}
      <CustomButton type="submit" btnText="Login" />
    </Form>
  )
}

export default LoginForm