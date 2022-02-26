import { Carousel } from 'react-bootstrap'
import { renderCarouselImages } from '@/hooks/carousel'

const Hero = ({ images }) => {
  return (
    <Carousel interval={null} controls={false} fade={true}>
      {renderCarouselImages(images)}
    </Carousel>
  )
}

export default Hero