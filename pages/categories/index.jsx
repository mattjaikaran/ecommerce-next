import axios from 'axios'
import { renderCategoryCards } from '@/hooks/categoryCards'
import MainLayout from '@/views/layouts/MainLayout'
import Row from 'react-bootstrap/Row'

const AllCategoriesPage = (props) => {
  return (
    <MainLayout>
      <h1 className="mt-5">All Categories</h1>
      <Row className="mt-5">{renderCategoryCards(props.categories)}</Row>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  const URL = 'http://localhost:3000/api/categories'
  const response = await axios.get(URL)
  return {
    props: {
      categories: response.data.categories
    },
  }
}

export default AllCategoriesPage
