import { useRouter } from 'next/router'
import Layout from "@/components/Layout"

const CategoryID = () => {
  const router = useRouter()
  // console.log('🚀 ~ file: [id].js ~ line 6 ~ CategoryID ~ router', router.query.slug)
  return (
    <Layout>
      <h1>Category ID {router.query.slug}</h1>
    </Layout>
  )
}

export default CategoryID
