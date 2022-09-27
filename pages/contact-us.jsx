import { Row, Col } from 'react-bootstrap'
import Layout from '@/views/layouts/MainLayout'
import ContactForm from '@/components/forms/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
