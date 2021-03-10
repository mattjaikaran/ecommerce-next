import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap"
import styles from '../ProductDetail.module.scss'

const ProductVariants = () => {
  return (
    <div>
      <div>
        <p>Review Component</p>
        <h5>Pocket Fleece Joggers</h5>
        <p>ZELLA</p>

        <div className="mt-3">
          <div className="">
            <h6 className="d-inline ml-2">$39.20</h6>
            <p className="text-muted d-inline ml-2">
              <small>49.00</small>
            </p>
            <p className="d-md-inline ml-2">20% off</p>
            <p className="d-md-inline ml-2">FREE SHIPPING</p>
          </div>
          <p className="">
            Get a $40 Bonus Note when you use a new Shop credit card.
            <br />
            <a href="#">Apply Now</a>
          </p>
          <p>
            A soft and stretchy cotton blend means easy comfort in modern jogger
            pants with versatile appeal.
          </p>
        </div>

        <Row className="mt-3">
          <Col xs={7}>
            <p>
              <span className="font-weight-bold">Fit:</span>
              <span className="ml-1">True to size.</span>
            </p>
          </Col>
          <Col xs={5}>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
              <Dropdown.ItemText>Choose a Size: True to Size</Dropdown.ItemText>
              <Dropdown.Item as="button">X-Small</Dropdown.Item>
              <Dropdown.Item as="button">Small</Dropdown.Item>
              <Dropdown.Item as="button">Medium</Dropdown.Item>
              <Dropdown.Item as="button">Large</Dropdown.Item>
              <Dropdown.Item as="button">X-Large</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Form>
          <Form.Check
            type="radio"
            label={`Shipping - Standard`}
            id="custom-shipping-1"
          />
          <Form.Check
            type="radio"
            label={`Shipping - Overnight`}
            id="custom-shipping-2"
          />
        </Form>
        <Button variant="outline-dark" block>
          Add To Bag
        </Button>
      </div>
    </div>
  )
}

export default ProductVariants