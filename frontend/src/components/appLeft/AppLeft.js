import React from 'react'

import { ReactComponent as LinkedInSVG } from '../../icons/LinkedIn.svg'
import { ReactComponent as GithubSVG } from '../../icons/Github.svg'
import { ReactComponent as UpworkSVG } from '../../icons/Upwork.svg'
import { ReactComponent as FiverrSVG } from '../../icons/Fiverr.svg'

import './appLeft.css'

const AppLeft = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/karolisvilimas/')
  }
  const openGitHub = () => {
    window.open('https://github.com/TheMuCiT')
  }
  const openFiverr = () => {
    window.open('https://www.fiverr.com/feikkonas?up_rollout=true')
  }
  const openUpwork = () => {
    window.open('https://www.upwork.com/freelancers/~015f01f9f5844e868c')
  }
  return (
    <div className='appLeftContainer'>
      <div className='appLeftItem' onClick={openLinkedIn}>
        <LinkedInSVG className='appLeftItemIcon' />
      </div>
      <div className='appLeftItem' onClick={openGitHub}>
        <GithubSVG className='appLeftItemIcon' />
      </div>
      <div className='appLeftItem' onClick={openFiverr}>
        <UpworkSVG className='appLeftItemIcon' />
      </div>
      <div className='appLeftItem' onClick={openUpwork}>
        <FiverrSVG className='appLeftItemIcon' />
      </div>
    </div>
  )
}

export default AppLeft
