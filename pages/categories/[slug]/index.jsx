import { useRouter } from 'next/router'
import Layout from '@/views/layouts/MainLayout'
import Masculine from '@/views/categories/Masculine'
import Feminine from '@/views/categories/Feminine'
import HomeLiving from '@/views/categories/HomeLiving'
import Accessories from '@/views/categories/Accessories'
import CustomLabel from '@/views/categories/CustomLabel'

const CategoryDetailPage = () => {
  const router = useRouter()
  const slug = router.query.slug
  const renderCategoryScreen = () => {
    switch (slug) {
      case 'masculine':
        return <Masculine />
      case 'feminine':
        return <Feminine />
      case 'home-living':
        return <HomeLiving />
      case 'accessories':
        return <Accessories />
      case 'custom-label':
        return <CustomLabel />
      default:
        return ''
    } 
  }
  return (
    <Layout>
      {renderCategoryScreen()}
    </Layout>
  )
}

export default CategoryDetailPage
