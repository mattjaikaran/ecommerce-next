import Link from 'next/link'
import MainLayout from '@/views/layouts/MainLayout'
import Register from '@/views/auth/Register'

const RegisterPage = () => {
  return (
    <MainLayout>
      <Register />
      <div className="mt-3 text-center">
        <Link href="/login">Click here to Login</Link>
      </div>
    </MainLayout>
  )
}

export default RegisterPage
