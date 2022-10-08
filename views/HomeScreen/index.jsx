import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { productArr } from '@/copy/products'
import { homeHeroImages } from '@/copy/homepage'
import Hero from '@/components/shared/Hero'
import ProductCard from '@/components/products/ProductCard'
import Categories from '@/components/categories/AllCategories'
import MiniProductCardGrid from '@/components/products/MiniProductCardGrid'
import CategorySlider from '@/components/categories/CategorySlider'
import ProductGraphic from '@/components/products/ProductGraphic'
import ProductGraphicLarge from '@/components/products/ProductGraphic/ProductGraphicLarge'
import ImgWithTextBelow from '@/components/shared/ImgWithTextBelow'
import HalfTextHalfImg from '@/components/shared/HalfTextHalfImg'
import couchBlue from '@/images/couch-blue.png'
import entertainmentCenter from '@/images/entertainment-center.png'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import mensFall from '@/images/joao-vitor-duarte-AZG5_AzcMto-unsplash.jpeg'
import styles from '@/styles/Home.module.scss'

const HomeScreen = () => {
  const renderProducts = () => {
    return productArr.map((product) => {
      return (
        <Col
          key={product.id}
          className="mb-sm-3 px-md-2 px-1"
          xs={6}
          sm={6}
          md={6}
          lg={3}
        >
          <ProductCard product={product} />
        </Col>
      )
    })
  }
  return (
    <Container>
      <Row className="mt-3">
        <Col md={12} className="mb-md-3 px-0">
          <Hero images={homeHeroImages} />
        </Col>
        <Col md={6} className="px-md-2 p-0">
          <ProductGraphic
            img={couchBlue}
            description="Comfortable"
            product="Chair"
            productDescription="Browse our collection."
            ctaText="View Now"
            ctaLink="/products/123"
          />
        </Col>
        <Col md={6} className="p-0">
          <ProductGraphic
            img={entertainmentCenter}
            description="Modern"
            product="Entertainment Center"
            productDescription="Browse living room furniture."
            ctaText="View Now"
            ctaLink="/categories/living-room"
          />
        </Col>
      </Row>
      <Row className="px-3">{renderProducts()}</Row>
      <MiniProductCardGrid />
      <Categories />
      <HalfTextHalfImg />
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
        <Col md={6} className="px-0">
          <ProductGraphicLarge
            img={entertainmentCenter}
            description="New"
            product="Home Living"
            ctaText="Shop This Style"
            ctaLink="/categories/home-living"
          />
        </Col>
        <Col md={6} className="px-0">
          <ProductGraphicLarge
            img={denim}
            description="Featured"
            product="Womens Spring"
            ctaText="View Now"
            ctaLink="/categories/123"
          />
        </Col>
        <Col md={12} className="px-0">
          <ProductGraphicLarge
            fullWidth
            whiteText
            img={mensFall}
            description="Featured"
            product="Mens Fall"
            ctaText="View Now"
            ctaLink="/categories/masculine"
          />
        </Col>
        <Col md={6} className="px-0">
          <ImgWithTextBelow
            categoryCardList
            img="https://dummyimage.com/650x600/000/fff"
            imgAlt="Spring is here"
            title="Spring is here"
            description="Time to let loose with all the newest trends."
            ctaText="Shop Inspiration"
            ctaLink="/products/456"
            ctaText2="Explore Now"
            ctaLink2="/categories/feminine"
          />
        </Col>
        <Col md={6} className="px-0">
          <ImgWithTextBelow
            categoryCardList
            img="https://dummyimage.com/650x600/ebebeb/000"
            imgAlt="Shop Sales"
            title="Shop Sales"
            description="Trying to spend that tax return? Lets go"
            ctaText="Explore Sales"
            ctaLink="/products/789"
            ctaText2="Shop Clearance"
            ctaLink2="/categories/masculine"
            ctaText3="Accessories Clearance"
            ctaLink3="/categories/feminine"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
