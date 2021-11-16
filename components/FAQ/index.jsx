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
        <Card key={id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={id}>
              {question}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>{answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
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