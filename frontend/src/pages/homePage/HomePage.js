import React from 'react'
import AppLeft from '../../components/appLeft/AppLeft'
import AppRight from '../../components/appRight/AppRight'

import './homePage.css'

const HomePage = () => {
  return (
    <div className='app'>
      <div className='appLeft'>
        <AppLeft />
      </div>
      <div className='appMain'>
        <div className='appMainTitleContainer'>
          <div className='appMainTitle'>Karolis Vilimas</div>
          <div className='appMainText'>Full-Stack React native and React JS developer</div>
        </div>

        <div className='appMainAboutMe'>
          Passionate React developer with two years of experience in a freelancer industrial and a strong focus on
          front-end development with a willingness to learn and master Back-end development and testing. Expertise
          in web and mobile app development, with a particular interest in using React to create high-performance
          user interfaces.
        </div>
      </div>
      <div className='appRight'>
        <AppRight />
      </div>
    </div>
  )
}

export default HomePage
