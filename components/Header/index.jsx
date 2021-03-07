import Link from 'next/link'
import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
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
      <TopNav />
      <MainNav />
    </div>
  )
}

export default Header