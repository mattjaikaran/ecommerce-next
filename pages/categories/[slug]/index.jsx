import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import Masculine from '@/screens/categories/Masculine'
import Feminine from '@/screens/categories/Feminine'
import HomeLiving from '@/screens/categories/HomeLiving'
import Accessories from '@/screens/categories/Accessories'
import CustomLabel from '@/screens/categories/CustomLabel'

const CategoryID = () => {
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

export default CategoryID
