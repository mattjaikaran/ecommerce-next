import { Carousel } from 'react-bootstrap'
import { homeHeroImages } from '@/copy/homepage'
import { renderCarouselImages } from '@/hooks/carousel'

const Hero = () => {
  return (
    <Carousel interval={null} controls={false} fade={true}>
      {renderCarouselImages(homeHeroImages)}
    </Carousel>
  )
}

export default Hero