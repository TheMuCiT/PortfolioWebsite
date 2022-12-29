import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../contexts/DataContext'

import lottieJson from '../../assets/Animation/data.json'
import SkillTextAnimation from '../../assets/Animation/Skill.json'
import PortfolioTextAnimation from '../../assets/Animation/Portfolio.json'

import Lottie from 'lottie-react'

import './appRight.css'

const AppRight = () => {
  const { sideShow, sideText } = useContext(DataContext)

  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true)
    }
  }, [sideShow])

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true)
    }
  }, [sideText])

  return (
    <div className='appRightContainer' style={{ display: sideShow ? 'flex' : 'none' }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={
          sideText === 'about me' ? lottieJson : sideText === 'skill' ? SkillTextAnimation : PortfolioTextAnimation
        }
        loop={false}
        style={{ width: '200px', height: '800px' }}
      />
      {/* <div className='appRightText'>{sideText}</div> */}
    </div>
  )
}

export default AppRight
