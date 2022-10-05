import Image from 'next/image'
import { Carousel } from 'react-bootstrap'

export const renderCarouselImages = (slides = []) => {
  return slides.map((slide) => {
    const { id, img, imgMobile, caption, description } = slide
    return (
      <Carousel.Item key={id} className="px-0">
        <div>
          <Image
            width={500}
            height={300}
            layout="responsive"
            src={img}
            alt={img.caption || `Carousel Image ${img.id}`}
          />
          {/* mobile image */}
          {/* <Image
            className="d-block d-md-none"
            width={400}
            height={800}
            layout="responsive"
            src={imgMobile}
            alt={img.caption || `Carousel Image ${img.id}`}
          /> */}
          {description && (
            <Carousel.Caption>
              {caption && <h3>{caption}</h3>}
              <p>{description}</p>
            </Carousel.Caption>
          )}
        </div>
      </Carousel.Item>
    )
  })
}
