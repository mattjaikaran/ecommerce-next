import './FAQ.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import { renderFaq } from '@/hooks/accordion'
import { mockFaqData } from '@/copy/faq'

const FAQ = () => {
  return <Accordion>{renderFaq(mockFaqData)}</Accordion>
}

export default FAQ