import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProductSlider from '@/components/ProductSlider'
import styles from './CategorySlider.module.scss'

const CategorySlider = ({ title, description, reverse }) => {
  if (reverse) {
    return (
      <Container className="mt-3">
        <Row>
          <Col md={9}>
            <ProductSlider />
          </Col>
          <Col className={`${styles.categoryDescription} mt-md-5 mb-5`} md={3}>
            <h5 className="font-weight-light">{title}</h5>
            <p className="pr-5">
              <small className="text-muted">{description}</small>
            </p>
            <Button className="btn-xs-block">Shop Now</Button>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Container className="mt-3">
      <Row>
        <Col className={`${styles.categoryDescription} mt-md-5 mb-5`} md={3}>
          <h5 className="font-weight-light">{title}</h5>
          <p className="pr-5">
            <small className="text-muted">{description}</small>
          </p>
          <Button className="btn-xs-block">Shop Now</Button>
        </Col>
        <Col md={9}>
          <ProductSlider />
        </Col>
      </Row>
    </Container>
  )
}

export default CategorySlider