import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './ProductGraphic.module.scss'

const ProductGraphicLarge = ({
  fullWidth,
  whiteText,
  contain,
  bgCenter,
  img,
  product,
  ctaText,
  ctaLink,
}) => {
  const router = useRouter()

  if (fullWidth) {
    return (
      <Card
        className={`${styles.productGraphicLarge} ${whiteText && 'text-white'}`}
        style={{
          backgroundImage: `url(${img.src})`,
          border: 'none',
          backgroundSize: contain && 'contain',
          backgroundPosition: bgCenter && 'center',
        }}
      >
        <Card.Body className={`text-right ${styles.cardBodyFullWidth}`}>
          <Card.Title className="h6">{product}</Card.Title>
          <Button variant="light" onClick={() => router.push(ctaLink)}>
            {ctaText}
          </Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card
      className={`${styles.productGraphicLarge} ${whiteText && 'text-white'}`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: contain && 'contain',
        backgroundPosition: bgCenter && 'center',
      }}
      border="light"
    >
      <Card.Body className={styles.cardBody}>
        <Card.Title className="h6">{product}</Card.Title>
        <Button variant="light" onClick={() => router.push(ctaLink)}>
          {ctaText}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductGraphicLarge