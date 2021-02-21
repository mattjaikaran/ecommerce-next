import { Image } from 'react-bootstrap'
import '../Categories.module.scss'


// single category
const Category = (props) => {
  return (
    <div>
      <Image src={props.img} fluid />
    </div>
  )
}

export default Category