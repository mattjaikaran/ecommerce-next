import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/CategorySlider'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import window from '@/images/window-blackandwhite.jpeg'
import mens1 from '@/images/nonresident-6-uNGPanQ-M-unsplash.jpeg'

const Mens = () => {
  return (
    <Container fluid>
      <h1>Mens</h1>
      <Row>
        <Col md={12} className="p-0 px-md-1">
          <ProductGraphicLarge
            fullWidth
            whiteText
            img={mens1}
            description="Featured"
            product="Mens Fall"
            ctaText="View Now"
            ctaLink="/categories/mens"
          />
        </Col>
        <Col md={6} className="p-0 px-md-0">
          <ProductGraphicLarge
            whiteText
            img={window}
            description="New"
            product="Home Living"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="p-0 px-md-0">
          <ProductGraphicLarge
            img={denim}
            description="Featured"
            product="Men Featured Collection"
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
  )
}

export default Mens