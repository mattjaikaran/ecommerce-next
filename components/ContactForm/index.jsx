import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data, event) => {
    console.log('data', data)
    console.log('event', event)
  }
  errors && console.log(errors)


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="contactForm.firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName"
              placeholder="Sarah" 
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              {...register("firstName", {required: true, maxLength: 80})} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Marshall" 
              {...register("lastName", {required: true, maxLength: 80})} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
              placeholder="name@example.com" 
              {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              type="tel" 
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder="212-555-1234" 
              {...register("phoneNumber", {required: true, minLength: 6, maxLength: 12})} />
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="exampleForm.contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message"
              rows={3} 
              value={message}
              onChange={e => setMessage(e.target.value)}
              {...register}
              placeholder="Enter your message" />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default ContactForm