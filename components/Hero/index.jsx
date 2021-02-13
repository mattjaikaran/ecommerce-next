import { Carousel, Image } from 'react-bootstrap'


const slides = [
  {
    id: 1,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'First Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'Second Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    img: 'https://dummyimage.com/800x400/000/fff',
    title: 'Third Slide',
    description: ''
  },
]

const Hero = () => {
  
  const renderHeroImages = () => {
    return slides.map(slide => {
      const { id, img, title, description } = slide
      return (
        <Carousel.Item key={id}>
          <Image
            className="d-block w-100"
            src={img}
            alt={title}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description ? description : null}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }

  return (
    <Carousel 
      controls={false}
      fade={true}>
      {renderHeroImages()}
    </Carousel>
  )
}

export default Hero