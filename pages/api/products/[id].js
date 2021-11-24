import { productArr } from '@/copy/products'

export default (req, res) => {
  const products = productArr
  try {
    res.status(200).json({ products })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
