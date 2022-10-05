import Accordion from 'react-bootstrap/Accordion'

export const renderFaq = (faqData = []) => {
  return faqData.map((faq) => {
    const { id, question, answer } = faq
    return (
      <div key={id}>
        <Accordion.Item eventKey={id} key={id}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
      </div>
    )
  })
}