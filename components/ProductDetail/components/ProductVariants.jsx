import { useState } from 'react'
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Button,
} from 'react-bootstrap'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styles from '../ProductDetail.module.scss'

const ProductVariants = (props) => {
  const [shippingType, setShippingType] = useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  const handleAddToBag = async (e) => {
    // const productObj = {
    //   ...props.exercise,
    //   size,
    //   shippingType
    // }

    console.log('Loading.')
    try {
      // const response = axios.post('url', productObj)
      console.log('added to bag')
    } catch (err) {
      console.log(err.message)
    }
  }
  
  
  return (
    <div>
      <div>
        <p>Review Component</p>
        <h5>Product Name</h5>
        <p>Brand Name</p>

        <div className="mt-3">
          <div>
            <h6 className="d-inline">$39.20</h6>
            <p className="text-muted d-inline ml-2">
              <small className="line-through"> 49.00</small>
            </p>
            <p className="ml-md-2">20% off</p>
            <p className="ml-md-2">FREE SHIPPING</p>
          </div>
          <p className="mt-2">
            <small className="creditCardTag">
              Get a $40 Bonus Note when you use a new Shop credit card.
            </small>
            <br />
            <a href="#">Apply Now</a>
          </p>
          <p className="shortDescription">
            A soft and stretchy cotton blend means easy comfort in modern jogger
            pants with versatile appeal.
          </p>
        </div>

        <Row className="mt-3">
          <Col xs={6}>
            <p className="fit">
              <span className="font-weight-bold">Fit: </span>
              <span className="ml-1">True to size.</span>
            </p>
          </Col>
          <Col xs={6}>
            <DropdownButton id="dropdown-item-button" title="Choose a Size">
              <Dropdown.Item as="button" value="x-small">
                X-Small
              </Dropdown.Item>
              <Dropdown.Item as="button" value="small">
                Small
              </Dropdown.Item>
              <Dropdown.Item as="button" value="medium">
                Medium
              </Dropdown.Item>
              <Dropdown.Item as="button" value="large">
                Large
              </Dropdown.Item>
              <Dropdown.Item as="button" value="x-large">
                X-Large
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(handleAddToBag)}>
          <div key={`custom-inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Standard Shipping"
              type="radio"
              id="custom-inline-radio-1"
            />
            <Form.Check
              inline
              label="Overnight Shipping"
              type="radio"
              id="custom-inline-radio-2"
            />
          </div>
          <Button variant="outline-dark btn-xs-block" type="submit">
            Add To Bag
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ProductVariants