import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ImgWithTextBelow = ({
  img,
  imgAlt,
  title,
  description,
  ctaText,
  ctaLink,
  ctaText2,
  ctaLink2,
  ctaText3,
  ctaLink3,
}) => {
  return (
    <Card style={{ border: 'none' }} border="light">
      <Card.Img
        variant="top"
        src={img}
        alt={imgAlt}
      />
      <Card.Body>
        {title && <Card.Title className="h6">{title}</Card.Title>}
        {description && <p>{description}</p>}
        <div>
          {ctaText && (
            <div className="d-inline">
              <Link href={ctaLink}>
                <small>
                  <u>{ctaText}</u>
                </small>
              </Link>
            </div>
          )}
          {ctaText2 && (
            <div className="d-inline mx-3">
              <Link href={ctaLink2}>
                <small>
                  <u>{ctaText2}</u>
                </small>
              </Link>
            </div>
          )}
          {ctaText3 && (
            <div className="d-inline">
              <Link href={ctaLink3}>
                <small>
                  <u>{ctaText3}</u>
                </small>
              </Link>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ImgWithTextBelow