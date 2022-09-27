import Link from 'next/link'
import Layout from '@/views/layouts/MainLayout'
import Register from '@/views/auth/Register'

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
