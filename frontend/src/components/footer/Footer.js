import React from 'react'

import { ReactComponent as Upwork1SVG } from '../../icons/Upwork1.svg'
import { ReactComponent as GitHub1SVG } from '../../icons/GitHub1.svg'
import { ReactComponent as LinkedIn1SVG } from '../../icons/LinkedIn1.svg'

import './footer.css'
const Footer = () => {
  const handleUpwork = () => {
    window.open('https://www.upwork.com/freelancers/~015f01f9f5844e868c')
  }

  const handleGitHub = () => {
    window.open('https://github.com/TheMuCiT')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/karolisvilimas/')
  }

  //   const handleFiverr = () => {
  //      window.open('https://www.fiverr.com/feikkonas?up_rollout=true')
  //    }

  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='footerMainLeft'>
          <div className='footerMainLeftLogo'>Karolis Vilimas</div>
          <div className='footerMainLeftText'>
            A React Native Developer focused on the best user experience and high-performance mobile application
            development.
          </div>
          <div className='footerMainLeftCopy'>Ⓒ Copyright 2022 - Made by Karolis Vilimas</div>
        </div>
        <div className='footerMainRight'>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Contact me</div>
            <div className='footerMainRightItemIcons'>
              <Upwork1SVG className='footerIcon' onClick={handleUpwork} />
              <GitHub1SVG className='footerIcon' onClick={handleGitHub} />
              <LinkedIn1SVG className='footerIcon' onClick={handleLinkedIn} />
            </div>
          </div>
        </div>
        <div className='footerMainLeftCopyMobile'>Ⓒ Copyright 2022 - Made by Karolis Vilimas</div>
      </div>
    </div>
  )
}

export default Footer
