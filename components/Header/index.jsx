import Link from 'next/link'
import './Header.module.scss'

const Header = () => {
  // start out with 2 categories: men/women. 
  // above navbar - full width free shipping component (ie - nordstrom.com)
  // navbar:
  //   logo - LOGO
  //   categories (men/women)
  //   search
  //   auth 
  //   cart
  return (
    <div className="text-center">
      <Link href="/">Home</Link>
      <br />
      <Link href="/product">Product Detail Page</Link>
      <br />
      <Link href="/auth">Login/Register</Link>
    </div>
  )
}

export default Header