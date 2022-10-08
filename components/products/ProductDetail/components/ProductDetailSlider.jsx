import Carousel from 'react-bootstrap/Carousel'
import { renderCarouselImages } from '@/hooks/carousel'

const ProductDetailSlider = ({ imgArray }) => {
  return (
    <Carousel interval={null} controls={false}>
      {renderCarouselImages(imgArray)}
    </Carousel>
  )
}

export default ProductDetailSlider
