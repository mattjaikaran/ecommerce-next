import { Carousel } from 'react-bootstrap'
import { renderCarouselImages } from '@/hooks/carousel'
import styles from './Hero.module.scss'

const Hero = ({ images }) => {
  return (
    <>
      <Carousel className={styles.hero} interval={null} controls={false} fade={true}>
        {renderCarouselImages(images)}
      </Carousel>
    </>
  )
}

export default Hero