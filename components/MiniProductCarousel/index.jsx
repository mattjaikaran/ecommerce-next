import { useState, useEffect } from 'react'
// import { useAsync } from '@hooks/useAsync'
import axios from 'axios'
import Slider from 'react-slick'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import MiniProductCard from '@components/MiniProductCard'


const MiniProductCarousel = () => {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6])
  const [products, setProducts] = useState(null)
  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const handleClick = () => {
    console.log(slides)
    setSlides(slides.length === 3 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3])
  }

  const renderSlides = () => {
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
    <Container>
      <p>carousel</p>
      <Row className="text-center px-3">
        {renderSlides()}
      </Row>
      {/* <Button onClick={handleClick}>Click</Button> */}
    </Container>
  )
}

export default MiniProductCarousel