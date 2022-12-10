import axios from 'axios'
import { renderCategoryCards } from '@/hooks/categoryCards'
import MainLayout from '@/views/layouts/MainLayout'
import Row from 'react-bootstrap/Row'

const AllCategoriesPage = ({ categories }) => {
  return (
    <MainLayout>
      <h1 className="mt-5">All Categories</h1>
      <Row className="mt-5">{renderCategoryCards(categories)}</Row>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_API}/categories`
  const response = await axios.get(URL)
  return {
    props: {
      categories: response.data.categories
    },
  }
}

export default AllCategoriesPage
