import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="contactForm.firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="First name" 
              {...register("First name", {required: true, maxLength: 80})} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Last name" 
              {...register("Last name", {required: true, maxLength: 80})} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="contactForm.phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="Mobile number" 
              {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group controlId="exampleForm.contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default ContactForm