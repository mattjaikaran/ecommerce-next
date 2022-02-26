import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import window from '@/images/window-blackandwhite.jpeg'
import mens1 from '@/images/nonresident-6-uNGPanQ-M-unsplash.jpeg'

const Mens = () => {
  return (
    <Container>
      <h1>Womens</h1>
      <Row>
        <Col md={12} className="px-0 px-md-1">
          <ProductGraphicLarge
            fullWidth
            whiteText
            img={mens1}
            description="Featured"
            product="Womens Fall"
            ctaText="View Now"
            ctaLink="/categories/womens"
          />
        </Col>
        <Col md={6} className="px-0 px-md-1">
          <ProductGraphicLarge
            whiteText
            img={window}
            description="New"
            product="Home Living"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="px-0 px-md-1">
          <ProductGraphicLarge
            img={denim}
            description="Featured"
            product="Womens Spring"
            ctaText="View Now"
            ctaLink="/categories/123"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Mens
