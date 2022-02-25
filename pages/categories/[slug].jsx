import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import Mens from '@/screens/categories/Mens'
import Womens from '@/screens/categories/Womens'

const CategoryID = () => {
  const router = useRouter()
  const slug = router.query.slug
  const renderCategoryScreen = () => {
    switch (slug) {
      case 'mens':
        return <Mens />
      case 'womens':
        return <Womens />

      default:
        return <Mens />
    } 
  }
  return (
    <Layout>
      <h1>Category ID {slug}</h1>
      {renderCategoryScreen()}
    </Layout>
  )
}

export default CategoryID
