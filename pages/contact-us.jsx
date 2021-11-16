import { Row , Col } from 'react-bootstrap'
import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage