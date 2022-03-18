import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImgWithTextBelow from '@/components/ImgWithTextBelow'

const CategoryCardList = ({ categoryList }) => {
  const renderCardList = (list = []) =>
    list.map(({ id, img, imgAlt, ctaText, ctaLink }) => 
      <Col xs={6} md={2} key={id} className="px-md-2">
        <ImgWithTextBelow
          categoryCardList
          img={img}
          imgAlt={imgAlt}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />
      </Col>
    )

  return <Row className="mt-3 px-3 px-md-0">{renderCardList(categoryList)}</Row>
}

export default CategoryCardList