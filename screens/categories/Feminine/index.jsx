import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/CategorySlider'
import CategoryCardList from '@/components/CategoryCardList'
import ProductSlider from '@/components/ProductSlider'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import womenRack from '@/images/women-rack.jpeg'
import women1 from '@/images/women1.jpeg'
import womenModel1 from '@/images/women-model1.jpeg'
import womenWatch from '@/images/women-watch.jpeg'
import { sampleCategoryList } from '@/copy/categoryLists'

const Feminine = () => {
  return (
    <Container>
      <h1 className="mobile-center my-5">Feminine</h1>
      <Row>
        <Col md={12} className="p-0">
          <ProductGraphicLarge
            fullWidth
            whiteText
            img={women1}
            description="Featured"
            product="Fem Fall"
            ctaText="View Now"
            ctaLink="/categories/feminine/featured"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={womenRack}
            description="New"
            product="Women Accessories"
            ctaText="Shop This Style"
            ctaLink="/categories/accessories"
          />
        </Col>
        <Col md={6} className="p-0">
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
      <Row className="mt-3">
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={womenModel1}
            description="New"
            product="New Arrivals"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={womenWatch}
            description="Featured"
            product="Featured Collection"
            ctaText="View Now"
            ctaLink="/categories/123"
          />
        </Col>
        <Col md={12} className="px-5">
          <ProductSlider />
        </Col>
      </Row>
      <CategoryCardList categoryList={sampleCategoryList} />
    </Container>
  )
}

export default Feminine
