import Col from 'react-bootstrap/Col'
import CategoryCard from '@/components/products/CategoryCard'

export const renderCategoryCards = (categories = []) => {
    return categories.map((category) => {
      return (
        <Col key={category.id} md={4} sm={3} xs={6} className="px-0 px-sm-1">
          <CategoryCard category={category} />
        </Col>
      )
    })
  } 