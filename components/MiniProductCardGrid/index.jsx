import { useState, useEffect } from 'react'
// import { useAsync } from '@/hooks/useAsync'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import MiniProductCard from '@/components/MiniProductCard'

// const server = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ecommerce-store-nextjs.vercel.app/'

const MiniProductCardGrid = () => {
  const [products, setProducts] = useState(null)


  const renderCards = () => {
    if (!products) {
      return <p>Loading....</p>
    }
    return products.map(product => (
      <Col 
        key={product.id}
        className="px-0"
        xs={6} sm={6} md={4}>
        <MiniProductCard {...product} />
      </Col>
    ))
  }

  const renderData = async () => {
    const response = await axios.get(`/api/products`)
    return setProducts(response.data.products)
  }

  useEffect(() => renderData(), [])

  return (
    <Container className="px-4 px-md-5 mt-lg-3 mt-5">
      <Row className="text-center">
        {renderCards()}
      </Row>
    </Container>
  )
}

export default MiniProductCardGrid