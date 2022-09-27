import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductGraphicLarge from '@/components/products/ProductGraphic/ProductGraphicLarge'
import CategorySlider from '@/components/categories/CategorySlider'
import ProductSlider from '@/components/products/ProductSlider'
import CategoryCardList from '@/components/categories/CategoryCardList'
import menNecklace from '@/images/men-necklace.jpeg'
import womenPurse from '@/images/accessories-purse.jpeg'
import accessoriesSunglasses from '@/images/accessories-sunglasses.jpeg'
import accessoriesWatch from '@/images/accessories-watch.jpeg'
import accessoriesNecklace from '@/images/accessories-necklace.jpeg'
import { sampleCategoryList } from '@/copy/categoryLists'

const Accessories = () => {
  return (
    <Container>
      <h1 className="mobile-center my-5">Accessories</h1>
      <Row>
        <Col md={12} className="p-0">
          <ProductGraphicLarge
            fullWidth
            whiteText
            bgCenter
            img={accessoriesSunglasses}
            description="Featured"
            product="Accessories"
            ctaText="View Now"
            ctaLink="/categories/masculine"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            bgCenter
            img={accessoriesWatch}
            description="New"
            product="New Arrivals"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphicLarge
            whiteText
            img={accessoriesNecklace}
            description="Featured"
            product="Featured Collection"
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
            img={menNecklace}
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
            img={womenPurse}
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

export default Accessories
