import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import './navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  const [showMobile, setShowMobile] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    WindowChange()
  }, [])

  const HandleMobileMenu = () => {
    setMobile(!Mobile)
  }

  const WindowChange = () => {
    if (window.innerWidth > 620) {
      setMobile(false)
      setShowMobile(false)
    } else {
      setShowMobile(true)
    }
  }

  const goHome = () => {
    navigate('/v2')
  }

  const handleHome = () => {
    setMobile(false)
    var pathname = window.location.pathname
    if (pathname === '/v2') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/v2')
    }
  }

  const handleAbout = () => {
    setMobile(false)
    var pathname = window.location.pathname
    if (pathname === '/v2') {
      let home = document.getElementsByClassName('scrollToAbout')

      window.scrollTo({ top: home[0].offsetTop - 100, behavior: 'smooth' })
    } else {
      // go to main screen
      navigate('/v2')
    }
  }

  const handleProject = () => {
    setMobile(false)
    var pathname = window.location.pathname
    if (pathname === '/v2') {
      let home = document.getElementsByClassName('scrollToProject')

      window.scrollTo({ top: home[0].offsetTop - 100, behavior: 'smooth' })
    } else {
      // go to main screen
      navigate('/v2')
    }
  }

  window.addEventListener('resize', WindowChange)
  return (
    <>
      {showMobile && (
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen' onClick={goHome}>
                  Karolis Vilimas
                </div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7' onClick={handleHome}>
                  Home
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleAbout}>
                  About
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleProject}>
                  projects
                </div>
                {/* <div className='navbarCenterLink opacity7'>contact</div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='navbar'>
        <div className='navbarMobile'>
          <div className='navbarCenterIcon'>
            <div className='navbarMobileTopRight ' onClick={goHome}>
              Karolis Vilimas
            </div>
          </div>
        </div>
        <div className='navbarMobileButton'>
          <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        </div>

        <div className='navbarContainer'>
          <div className='navbarLeft'>
            <div className='navbarLeftLogo ' onClick={goHome}>
              Karolis Vilimas
            </div>
          </div>
          <div className='navbarCenter'></div>
          <div className='navbarRight'>
            <div className='navbarRightItem' onClick={handleHome}>
              Home
            </div>
            <div className='navbarRightItem' onClick={handleAbout}>
              About
            </div>
            <div className='navbarRightItem' onClick={handleProject}>
              projects
            </div>
            {/* <div className='navbarRightItem'>contact</div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
