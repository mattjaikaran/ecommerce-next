import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/CategorySlider'
import ProductSlider from '@/components/ProductSlider'
import ImgWithTextBelow from '@/components/ImgWithTextBelow'
import menSuits from '@/images/men-suits.jpeg'
import menSneakers from '@/images/men-sneakers.jpeg'
import menJacket from '@/images/men-jacket.jpeg'
import mens1 from '@/images/nonresident-6-uNGPanQ-M-unsplash.jpeg'

const Masculine = () => {
  return (
    <Container fluid>
      <Container fluid="xl">
        <h1 className="mobile-center my-5">Masculine</h1>
        <Row>
          <Col md={12} className="p-0">
            <ProductGraphicLarge
              fullWidth
              whiteText
              img={mens1}
              description="Featured"
              product="Masculine Fall"
              ctaText="View Now"
              ctaLink="/categories/masculine"
            />
          </Col>
          <Col md={6} className="p-0">
            <ProductGraphicLarge
              whiteText
              img={menJacket}
              description="New"
              product="New Arrivals"
              ctaText="Shop This Style"
              ctaLink="/categories/home-living"
            />
          </Col>
          <Col md={6} className="p-0">
            <ProductGraphicLarge
              whiteText
              img={menSuits}
              description="Featured"
              product="Masculine Featured Collection"
              ctaText="View Now"
              ctaLink="/categories/masculine"
            />
          </Col>
        </Row>

        <CategorySlider
          title="Featured"
          description="Our Featured Collection is what you need"
        />
        <hr className="mt-5" />
        <CategorySlider
          reverse
          title="New Arrivals"
          description="Shop our newest trends"
        />

        <Row className="mt-3">
          <Col md={6} className="p-0">
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
          <Col md={6} className="p-0">
            <ProductGraphicLarge
              bgCenter
              img={menSneakers}
              description="Featured"
              product="Masculine Featured Collection"
              ctaText="View Now"
              ctaLink="/categories/123"
            />
          </Col>
          <Col md={12} className="px-5">
            <ProductSlider />
          </Col>
        </Row>
        <Row className="mt-3 px-3 px-md-0">
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="Featured"
              ctaText="Featured"
              ctaLink="/product/456"
            />
          </Col>
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="New Arrivals"
              ctaText="New Arrivals"
              ctaLink="/product/456"
            />
          </Col>
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="Clothing"
              ctaText="Clothing"
              ctaLink="/product/456"
            />
          </Col>
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="Shoes"
              ctaText="Shoes"
              ctaLink="/product/456"
            />
          </Col>
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="Accessories"
              ctaText="Accessories"
              ctaLink="/product/456"
            />
          </Col>
          <Col xs={6} md={2}>
            <ImgWithTextBelow
              img="https://dummyimage.com/200x250/ebebeb/000"
              imgAlt="Sale"
              ctaText="Sale"
              ctaLink="/product/456"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Masculine