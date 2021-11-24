import Image from 'next/image'
import { Carousel } from 'react-bootstrap'


export const renderHeroImages = (slides) => {
  return slides.map((slide) => {
    const { id, img, title, description } = slide
    return (
      <Carousel.Item key={id}>
        <Image
          layout="responsive"
          width={800}
          height={400}
          src={img} 
          alt={title} />
        {description && (
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description ? description : null}</p>
          </Carousel.Caption>
        )}
      </Carousel.Item>
    )
  })
}