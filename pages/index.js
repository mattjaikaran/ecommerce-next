import { Row, Col } from 'react-bootstrap'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import ProductCard from '@components/ProductCard'
import Categories from '@components/Categories'
import LeftSideImgCard from '@components/LeftSideImgCard'
import styles from '../styles/Home.module.css'

const Home = () => {
  const productObj = {
  id: 1, 
  title: 'Buckle Wrap Wooden Table',
  price: 52,
  quantity: 1
}
  return (
    <Layout className={styles.container}>
      <div>
        <h1>Welcome to Ecommerce Store</h1>
        <h6>Built with NextJS</h6>
      </div>
      <div>
        <Hero />
        <Row>
          <Col xs={6} sm={6} md={6} lg={3}>
            <ProductCard product={productObj} />
          </Col>
          <Col xs={6} md={6} lg={3}>
            <ProductCard product={productObj} />
          </Col>
          <Col xs={6} md={6} lg={3}>
            <ProductCard product={productObj} />
          </Col>
          <Col xs={6} md={6} lg={3}>
            <ProductCard product={productObj} />
          </Col>
        </Row>
        <Categories />
        <Row>
          <Col>
            <LeftSideImgCard />
          </Col>
          <Col>
            <LeftSideImgCard />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home