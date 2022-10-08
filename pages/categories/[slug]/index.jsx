import { useRouter } from 'next/router'
import MainLayout from '@/views/layouts/MainLayout'
import Masculine from '@/views/categories/Masculine'
import Feminine from '@/views/categories/Feminine'
import HomeLiving from '@/views/categories/HomeLiving'
import Accessories from '@/views/categories/Accessories'
import CustomLabel from '@/views/categories/CustomLabel'
import NewArrivals from '@/views/categories/NewArrivals'
import BestSellers from '@/views/categories/BestSellers'
import Sale from '@/views/categories/Sale'
import Clearance from '@/views/categories/Clearance'

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
      case 'new-arrivals':
        return <NewArrivals />
      case 'best-sellers':
        return <BestSellers />
      case 'sale':
        return <Sale />
      case 'clearance':
        return <Clearance />
      default:
        return ''
    } 
  }
  return (
    <MainLayout>
      {renderCategoryScreen()}
    </MainLayout>
  )
}

export default CategoryDetailPage
