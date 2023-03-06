import React, { useContext, useEffect, useRef, useState } from 'react'
import useWindowSize from '../../../library/hooks/useWindowSize'
import HeaderContainer, { Div, MobileNav, Sticky } from './index.style'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useStore from '../../../library/hooks/useStore'
import Navbar from '../../../components/Navbar/Navbar'
import { LayoutContext } from '../../../context/LayoutProvider'
import MainMenu from './MainMenu'
import AuthMenu from './AuthMenu'
import ProfileMenu from './ProfileMenu'
import * as Icon from '../../../library/icons/index'
import MobileMenu from './MobileMenu'
import { logOut } from '../../../redux/actions/auth.action'

const Header = () => {
  let location = useLocation()
  let navigate = useNavigate()
  const [{ searchVisibility }] = useContext(LayoutContext)
  const { width } = useWindowSize()
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const headerType = location.pathname === '/' ? 'transparent' : 'default'
  const { isUser, isAdmin, auth, dispatch } = useStore()

  const handleLogout = () => {
    dispatch(logOut())
  }
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <HeaderContainer className={`${scroll ? 'is_sticky' : ''}`}>
      {
        width > 991 ?
          <Navbar
            headerType={headerType}
            mainMenu={<MainMenu isAdmin={isAdmin} />}
            authMenu={<AuthMenu />}
            profile={<ProfileMenu auth={auth} handleLogout={handleLogout} />}
            searchVisibility={searchVisibility}
            isLogged={isUser}
            scroll={scroll}
          /> : <MobileNav className={headerType}>
            <div className="logo">logo</div>
            <div className="menu-wrap">
              <div className="btn">
                <button onClick={() => setSearch(true)}><span><Icon.SearchOutlinedIcon /></span></button>
                <button onClick={() => setOpen(true)}><span><Icon.MenuOutlinedIcon /></span></button>
                <div className={`search-content ${search ? 'active' : ''}`}>
                  <div className="search-box">
                    <form action="">
                      <div>
                        <input type="text" name='keyword' />
                      </div>
                      <button><span><Icon.SearchOutlinedIcon /></span></button>
                    </form>
                    <button onClick={() => setSearch(false)}><span>Cancel</span></button>
                  </div>
                </div>
              </div>
              <div className={`mobile-layout ${open ? 'active' : ''}`}>
                <MobileMenu isAdmin={isAdmin} setOpen={setOpen} isUser={isUser} auth={auth} handleLogout={handleLogout} />
              </div>
            </div>
          </MobileNav>
      }
    </HeaderContainer>
  )
}

export default Header