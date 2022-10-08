import { allCategories } from '@/copy/categories'

export default (req, res) => {
  try {
    res.status(200).json({ categories: allCategories })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
