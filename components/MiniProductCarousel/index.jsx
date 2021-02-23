import { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel, Row, Col, Image } from 'react-bootstrap'
import MiniProductCard from '@components/MiniProductCard'

const slides = [
  {
    id: 1,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'First Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'Second Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'Third Slide',
    description: ''
  },
]

const MiniProductCarousel = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const renderData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:3000/api/products')
        console.log(response)
        setProducts(response.data.products)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }

  const renderHeroImages = () => {
    console.log('product!!!!!', products)
    if (products) {
      return products.map(product => {
        const { id } = product
        return (
          <Carousel.Item key={id}>
            <MiniProductCard {...product} />
          </Carousel.Item>
        )
      })
    }
  }

  
  useEffect(() => {
    renderData()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* {products && renderHeroImages()} */}
      {products && (
        <Carousel 
          interval={null}
          controls={false}
          fade={true}>
          {renderHeroImages()}
        </Carousel>
      )}
    </div>
  )
}

export default MiniProductCarousel