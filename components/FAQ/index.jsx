import './FAQ.module.scss'
import { Accordion } from 'react-bootstrap'

const mockFaqData = [
  {
    id: 1,
    question: 'Who are you?',
    answer: 'We are a brand that lorem ipsum..'
  },
  {
    id: 2,
    question: 'How do?',
    answer: 'Yes, of course. And overnight shipping.'
  },
]

const FAQ = () => {

  const renderFaq = () => {
    return mockFaqData.map(faq => {
      const { id, question, answer } = faq
      return (
        <div key={id}>
          <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>
              {answer}
            </Accordion.Body>
          </Accordion.Item>
        </div>
      )
    })
  }
  return (
    <Accordion>
      {renderFaq()}
    </Accordion>
  )
}

export default FAQ