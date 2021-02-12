import styles from '../styles/Home.module.css'
import Layout from '@components/Layout'

const Home = () => {
  return (
    <Layout className={styles.container}>
      <div>
        <h1>Welcome to Ecommerce Store</h1>
        <h6>Built with NextJS</h6>
      </div>
    </Layout>
  )
}

export default Home