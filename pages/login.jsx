import Link from 'next/link'
import Layout from '@/components/Layout'
import Login from '@/screens/Login'

const LoginPage = () => {
  return (
    <Layout>
      <Login />
      <div className="mt-3 text-center">
        <Link href="/register">Click here to Register</Link>
      </div>
    </Layout>
  )
}

export default LoginPage