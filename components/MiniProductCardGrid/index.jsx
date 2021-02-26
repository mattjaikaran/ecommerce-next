import { useState, useEffect } from 'react'
// import { useAsync } from '@hooks/useAsync'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import MiniProductCard from '@components/MiniProductCard'


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
    const response = await axios.get('http://localhost:3000/api/products')
    return setProducts(response.data.products)
  }

  useEffect(() => renderData(), [])

  return (
    <div className="pl-4 ml-lg-5">
      <Row className="text-center">
        {renderCards()}
      </Row>
    </div>
  )
}

export default MiniProductCardGrid