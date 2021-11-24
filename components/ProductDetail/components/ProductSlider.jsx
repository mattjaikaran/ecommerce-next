import { Carousel, Image } from 'react-bootstrap'
import { renderCarouselImages } from '@/hooks/carousel'
import styles from '../ProductDetail.module.scss'

const ProductSlider = ({ imgArray }) => {
  const renderCarouselImages = () => {
    return imgArray.map((img) => {
      return (
        <Carousel.Item>
          {/* desktop image/ */}
          <Image
            className="d-none d-md-block w-100"
            width={800}
            height={400}
            layout="responsive"
            src={img.img}
            alt={img.caption || `Carousel Image ${img.id}`}
          />
          {/* mobile image */}
          <Image
            className="d-block d-md-none w-100"
            width={400}
            height={600}
            layout="fill"
            src={img.imgMobile}
            alt={img.caption || `Carousel Image ${img.id}`}
          />
          {img.caption && (
            <Carousel.Caption>
              <h3>{img.caption}</h3>
              {img.subCaption && <p>{img.subCaption}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      )
    })
  }
  return <Carousel interval={null} controls={false}>{renderCarouselImages()}</Carousel>
}

export default ProductSlider