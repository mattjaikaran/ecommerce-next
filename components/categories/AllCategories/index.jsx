import { Container, Row, Col } from 'react-bootstrap'
import Category from '../SingleCategory'
import table from '@/images/table.png'
import barstoolBlack from '@/images/barstool-black.png'
import chair from '@/images/chair.png'
import chair2 from '@/images/chair2.png'
import couch from '@/images/couch.png'

const AllCategories = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col lg={9} className="px-0 px-md-2">
          <Row>
            <Col className="mb-sm-3 px-md-1 px-0" md={6} lg={6} xl={7}>
              <Category
                color="pink"
                img={table}
                hashtag="New Arrivals"
                title="Kitchen Table"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-sm-3 px-md-2 px-0" md={6} lg={6} xl={5}>
              <Category
                color="teal"
                img={chair}
                hashtag="Featured"
                title="Wooden Couch"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-sm-3 px-md-1 px-0" md={6} lg={6} xl={5}>
              <Category
                color="green"
                img={chair2}
                hashtag="Most Popular"
                title="Living Room"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-sm-3 px-md-2 px-0" md={6} lg={6} xl={7}>
              <Category
                color="purple"
                img={couch}
                hashtag="Hot Collection"
                title="Couches"
                link="/product-detail"
              />
            </Col>
            <Col className="mb-sm-3 px-md-2 px-0 d-lg-none" sm={12}>
              <Category
                imgRight
                color="yellow"
                img={barstoolBlack}
                hashtag="Trending Now"
                title="Kitchen Barstools"
                link="/product-detail"
              />
            </Col>
          </Row>
        </Col>
        <Col className="mb-sm-3 px-md-2 px-0 d-none d-lg-block" lg={3}>
          <Category
            imgRight
            color="yellow"
            img={barstoolBlack}
            hashtag="Trending Now"
            title="Kitchen Barstools"
            link="/product-detail"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AllCategories
