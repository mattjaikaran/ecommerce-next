import { Container, Row, Col } from 'react-bootstrap'
import Category from './components/Category'
import table from '@images/table.png'
import barstoolBlack from '@images/barstool-black.png'
import chair from '@images/chair.png'
import chair2 from '@images/chair2.png'
import couch from '@images/couch.png'

const Categories = () => {
  return (
    <div className="text-center mt-5">
      <Row>
        <Col sm={12} md={12} lg={9}>
          <Row>
            <Col className="mb-3 px-sm-2" xs={12} sm={12} md={6} lg={7}>
              <Category
                color="pink"
                img={table}
                hashtag="New Arrivals"
                title="Suitable Wood Tool"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-3 px-sm-2" xs={12} sm={12} md={6} lg={5}>
              <Category
                color="teal"
                img={chair}
                hashtag="Featured"
                title="Wood Chair"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-3 px-sm-2" xs={12} sm={12} md={6} lg={5}>
              <Category
                color="green"
                img={chair2}
                hashtag="Most Popular"
                title="Living Room Furniture"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-3 px-sm-2" sm={12} md={6} lg={7}>
              <Category
                color="purple"
                img={couch}
                hashtag="Hot Collection"
                title="Couches"
                link="/product-detail"
              />
            </Col>
          </Row>
        </Col>
        <Col className="mb-3 px-sm-2" lg={3} md={12} sm={12}>
          <Category
            imgRight
            color="yellow"
            img={barstoolBlack}
            hashtag="Trending Now"
            title="Barstools for Kitchen"
            link="/product-detail"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Categories