import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import styles from './CategoryCard.module.scss'

const placeholder = 'https://dummyimage.com/600x400/000/fff'

const CategoryCard = ({ category }) => {
  return (
    <Card border="light" className={styles.categoryCard}>
      <Card.Img variant="top" src={category.img || placeholder} />
      <Card.Body>
        <Card.Title>{category.title}</Card.Title>
        {category.description && (
          <Card.Text>
            {category.description}
          </Card.Text>
        )}
        <Link href={category.url}>
          <a>
            <small>
              View Collection
            </small>
          </a>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard