import { useForm } from 'react-hook-form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data, event) => {
    console.log('data', data)
    console.log('event', event)
  }
  errors && console.log(errors)

  return (
    <Form className="px-md-5 px-3" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="my-5 mobile-center">Contact Us</h3>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="contactForm.firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Sarah"
              {...register('firstName', { required: true, maxLength: 80 })}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Marshall"
              {...register('lastName', { required: true, maxLength: 80 })}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="emailAddress"
              placeholder="name@example.com"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="212-555-1234"
              {...register('phoneNumber', {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="exampleForm.contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              {...register}
              placeholder="Enter your message"
            />
          </Form.Group>
        </Col>
      </Row>
      {errors && <Alert>{errors}</Alert>}
      <Button className="btn-xs-block mt-3" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm