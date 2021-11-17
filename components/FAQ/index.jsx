import './FAQ.module.scss'
import { Accordion, Card, Button } from 'react-bootstrap'

const mockFaqData = [
  {
    id: 1,
    question: 'Is this site legit?',
    answer: 'No. Not yet'
  },
  {
    id: 2,
    question: 'Should you consider hiring the developers who worked on this web app?',
    answer: 'Yes, of course.'
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