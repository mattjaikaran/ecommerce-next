---
to: components/forms/<%= type || 'utils' %>/<%= h.changeCase.pascal(name) || 'new-form' %>/index.jsx
---
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import CustomButton from '@/components/shared/CustomButton'

const <%= h.changeCase.pascal(name) || 'NewForm' %> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data, event) => {
    console.log('data', data)
    console.log('event', event)
  }
  errors && console.log(errors)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="<%= h.changeCase.camel(name) %>.firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          placeholder="Sarah"
          {...register('firstName', { required: true, maxLength: 80 })}
        />
      </Form.Group>

      {errors && <Alert>{errors.message}</Alert>}
      <CustomButton type="submit" btnText="Submit" />
    </Form>
  )
}

export default <%= h.changeCase.pascal(name) || 'NewForm' %>