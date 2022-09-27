import Header from '@/components/nav/Header'
import Footer from '@/components/nav/Footer'

const ProductLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default ProductLayout
