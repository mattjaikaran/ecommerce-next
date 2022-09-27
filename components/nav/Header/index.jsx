import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
import './Header.module.scss'

const Header = () => {
  return (
    <div className="text-center">
      <TopNav /> 
      <MainNav />
    </div>
  )
}

export default Header