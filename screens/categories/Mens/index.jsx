import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/CategorySlider'
import menSuits from '@/images/men-suits.jpeg'
import menSneakers from '@/images/men-sneakers.jpeg'
import menJacket from '@/images/men-jacket.jpeg'
import mens1 from '@/images/nonresident-6-uNGPanQ-M-unsplash.jpeg'

const Mens = () => {
  return (
    <Container fluid>
      <Container fluid="xl">
        <h1 className="mobile-center my-5">Mens</h1>
        <Row>
          <Col md={12} className="p-0">
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
              img={menJacket}
              description="New"
              product="New Arrivals"
              ctaText="Shop This Style"
              ctaLink="/categories/home-living"
            />
          </Col>
          <Col md={6} className="p-0 px-md-0">
            <ProductGraphicLarge
              whiteText
              img={menSuits}
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

        <Row className="mt-3">
          {/* <Col md={12} className="p-0">
          <ProductGraphicLarge
            fullWidth
            whiteText
            img={mens1}
            description="Featured"
            product="Mens Fall"
            ctaText="View Now"
            ctaLink="/categories/mens"
          />
        </Col> */}
          <Col md={6} className="p-0 px-md-0">
            <ProductGraphicLarge
              whiteText
              bgCenter
              img={menJacket}
              description="New"
              product="New Arrivals"
              ctaText="Shop This Style"
              ctaLink="/categories/home-living"
            />
          </Col>
          <Col md={6} className="p-0 px-md-0">
            <ProductGraphicLarge
              whiteText
              bgCenter
              img={menSneakers}
              description="Featured"
              product="Men Featured Collection"
              ctaText="View Now"
              ctaLink="/categories/123"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Mens