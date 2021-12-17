import Image from 'next/image'
import { Carousel } from 'react-bootstrap'

export const renderCarouselImages = (slides) => {
  return slides.map((slide) => {
    const { id, img, imgMobile, caption, description } = slide
    return (
      <Carousel.Item key={id} className="pt-0">
        <div>
          {/* <Image
            layout="responsive"
            width={800}
            height={400}
            src={img}
            alt={caption}
          /> */}
          <Image
            // className="d-none d-md-block"
            width={800}
            height={400}
            layout="responsive"
            src={img}
            alt={img.caption || `Carousel Image ${img.id}`}
          />
          {/* mobile image */}
          {/* <Image
            className="d-block d-md-none"
            width={600}
            height={700}
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