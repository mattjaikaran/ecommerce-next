import Link from 'next/link'
import Layout from '@/components/Layout'
import Register from '@/components/Register'

const RegisterPage = () => {
  return (
    <Layout>
      <Register />
      <div className="mt-3 text-center">
        <Link href="/login">Click here to Login</Link>
      </div>
    </Layout>
  )
}

export default RegisterPage
