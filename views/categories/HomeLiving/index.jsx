import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/products/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/categories/CategorySlider'
import ProductSlider from '@/components/products/ProductSlider'
import CategoryCardList from '@/components/categories/CategoryCardList'
import homeLivingRoom from '@/images/home-living-room.jpeg'
import homeBed from '@/images/home-bed.jpeg'
import homePlants1 from '@/images/home-plants1.jpeg'
import homeShelves from '@/images/home-shelves.jpeg'
import homeRoom from '@/images/home-room.jpeg'
import { sampleCategoryList } from '@/copy/categoryLists'

const HomeLiving = () => {
  return (
    <Container>
      <h1 className="mobile-center my-5">Home Living</h1>
      <Row>
        <Col md={12} className="p-0">
          <ProductGraphicLarge
            fullWidth
            whiteText
            bgCenter
            img={homeShelves}
            description="Featured"
            product="Home Living"
            ctaText="View Now"
            ctaLink="/categories/masculine"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            img={homePlants1}
            description="New"
            product="New Arrivals"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            img={homeLivingRoom}
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
        title="New Arrivals"
        description="Shop our newest trends"
      />

      <Row className="mt-3">
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={homeRoom}
            description="New"
            product="New Arrivals"
            ctaText="Shop Now"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={homeBed}
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

export default HomeLiving
