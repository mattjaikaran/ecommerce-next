import { testCategories } from '@/copy/categories'

export default (req, res) => {
  const categories = testCategories
  try {
    res.status(200).json({ categories })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
