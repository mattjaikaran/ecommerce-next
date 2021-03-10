import { useState } from 'react'
import ProductModal from '@components/ProductModal'


const ProductQuickView = () => {
  const [modalShow, setModalShow] = useState(false)
  
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default ProductQuickView