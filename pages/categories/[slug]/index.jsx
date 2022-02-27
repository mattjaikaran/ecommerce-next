import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Mens from '@/screens/categories/Mens'
import Womens from '@/screens/categories/Womens'
import HomeLiving from '@/screens/categories/HomeLiving'
import Accessories from '@/screens/categories/Accessories'
import CustomLabel from '@/screens/categories/CustomLabel'

const CategoryID = () => {
  const router = useRouter()
  const slug = router.query.slug
  const renderCategoryScreen = () => {
    switch (slug) {
      case 'mens':
        return <Mens />
      case 'womens':
        return <Womens />
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
      {/* <Link href={`${slug}/gallery`}>View Gallery</Link> */}
      {renderCategoryScreen()}
    </Layout>
  )
}

export default CategoryID
