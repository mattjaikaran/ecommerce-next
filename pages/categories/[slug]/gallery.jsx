import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { renderCategoryScreen } from '@/hooks/categories'

const CategoryGallery = () => {
  const router = useRouter()
  const slug = router.query.slug
  return (
    <Layout>
      <h1>{renderCategoryScreen(slug)} Gallery</h1>
      <p>This is my gallery</p>
    </Layout>
  )
}

export default CategoryGallery