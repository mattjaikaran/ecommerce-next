import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/CategorySlider'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import womenRack from '@/images/women-rack.jpeg'
import women1 from '@/images/women1.jpeg'

const Womens = () => {
  return (
    <Container fluid>
      <Container fluid="xl">
        <h1>Womens</h1>
        <Row>
          <Col md={12} className="p-0 px-md-1">
            <ProductGraphicLarge
              fullWidth
              whiteText
              img={women1}
              description="Featured"
              product="Womens Fall"
              ctaText="View Now"
              ctaLink="/categories/womens/featured"
            />
          </Col>
          <Col md={6} className="p-0 px-md-0">
            <ProductGraphicLarge
              whiteText
              img={womenRack}
              description="New"
              product="Women Accessories"
              ctaText="Shop This Style"
              ctaLink="/categories/accessories"
            />
          </Col>
          <Col md={6} className="p-0 px-md-0">
            <ProductGraphicLarge
              img={denim}
              description="Featured"
              product="Featured Collection"
              ctaText="View Now"
              ctaLink="/categories/123"
            />
          </Col>
        </Row>

        <CategorySlider
          title="Featured"
          description="Small be and the rain would phase distance, succeed align."
        />
        <hr className="mt-5" />
        <CategorySlider
          title="New Arrivals"
          description="Small be and the rain would phase distance, succeed align."
        />
      </Container>
    </Container>
  )
}

export default Womens
