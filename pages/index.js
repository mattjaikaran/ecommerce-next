import { Container, Row, Col } from 'react-bootstrap'
import { productArr } from '../copy/products'
import { homeHeroImages } from '@/copy/homepage'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Categories from '@/components/Categories'
import MiniProductCardGrid from '@/components/MiniProductCardGrid'
import CategorySlider from '@/components/CategorySlider'
import ProductGraphic from '@/components/ProductGraphic'
import ProductGraphicLarge from '@/components/ProductGraphic/ProductGraphicLarge'
import styles from '../styles/Home.module.scss'
import couchBlue from '@/images/couch-blue.png'
import entertainmentCenter from '@/images/entertainment-center.png'
import denim from '@/images/pexels-mica-asato-1082529.jpeg'
import home1 from '@/images/home1.jpeg'
import mensFall from '@/images/joao-vitor-duarte-AZG5_AzcMto-unsplash.jpeg'

const Home = () => {
  const renderProducts = () => {
    return productArr.map(product => {
      return (
        <Col
          // className={styles.productCardColumn}
          key={product.id}
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
    <Layout>
      <Container fluid="xl">
        <Hero images={homeHeroImages} />
        <Row className="mt-3">
          <Col md={6}>
            <ProductGraphic
              img={couchBlue}
              description="Comfortable"
              product="Chair"
              productDescription="Browse our collection."
              ctaText="View Now"
              ctaLink="/product/123"
            />
          </Col>
          <Col md={6}>
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
      </Container>
      <Container fluid>
        <Row>{renderProducts()}</Row>
        <MiniProductCardGrid />
        <Categories />
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
          <Col md={6} className="px-0 px-md-1">
            <ProductGraphicLarge
              img={entertainmentCenter}
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
          <Col md={12} className="px-0 px-md-1">
            <ProductGraphicLarge
              fullWidth
              whiteText
              img={mensFall}
              description="Featured"
              product="Mens Fall"
              ctaText="View Now"
              ctaLink="/categories/mens"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home