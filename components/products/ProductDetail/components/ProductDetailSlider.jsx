import { Carousel } from 'react-bootstrap'
import { renderCarouselImages } from '@/hooks/carousel'

const ProductDetailSlider = ({ imgArray }) => {
  return (
    <Carousel interval={null} controls={false}>
      {renderCarouselImages()}
    </Carousel>
  )
}

export default ProductDetailSlider
