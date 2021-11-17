import { Container, Row, Col } from 'react-bootstrap'
import { productArr } from '../copy/products'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Categories from '@/components/Categories'
import MiniProductCardGrid from '@/components/MiniProductCardGrid'
import CategorySlider from '@/components/CategorySlider'
import ProductGraphic from '@/components/ProductGraphic'
import styles from '../styles/Home.module.scss'
import couchBlue from '@/images/couch-blue.png'
import entertainmentCenter from '@/images/entertainment-center.png'

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
      <Hero />
      <Container>
        <Row className="mt-3">
          <Col md={6}>
            {/* leftSide */}
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
              ctaLink="/category/living-room"
            />
          </Col>
        </Row>
      </Container>
      <Container>
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
      </Container>
    </Layout>
  )
}

export default Home