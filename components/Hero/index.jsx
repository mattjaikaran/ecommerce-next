import { Carousel } from 'react-bootstrap'
import { homeHeroImages } from '@/copy/homepage'
import { renderHeroImages } from '@/copy/carousel'

const Hero = () => {
  return (
    <Carousel interval={null} controls={false} fade={true}>
      {renderHeroImages(homeHeroImages)}
    </Carousel>
  )
}

export default Hero