import React, { useContext } from 'react'

import { DataContext } from '../../contexts/DataContext'

import './animation.css'

const Animation = () => {
  const { setSideShow, setSideText } = useContext(DataContext)

  window.onscroll = function () {
    var pathname = window.location.pathname
    if (pathname.split('/')[1] === 'project') {
      scrollAnimation()
    } else if (pathname === '/') {
      scrollAnimationHomePage()
    }
  }

  const scrollAnimation = () => {
    let images = document.getElementsByClassName('projectImage')
    let WindowsPosition = window.pageYOffset / 5

    images[0].style.transform = `translateY(${-WindowsPosition}%)`
    images[0].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) `

    images[1].style.transform = `translateY(${-WindowsPosition / 1.5}%) scale(0.95)`
    images[1].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.1px)`

    images[2].style.transform = `translateY(${-WindowsPosition / 2}%) scale(0.9)`
    images[2].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.15px)`

    images[3].style.transform = `translateY(${-WindowsPosition / 2.5}%) scale(0.85)`
    images[3].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.2px)`

    if (images[4]) {
      images[4].style.transform = `translateY(${-WindowsPosition / 3}%) scale(0.8)`
      images[4].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.25px)`
    }

    if (images[5]) {
      images[5].style.transform = `translateY(${-WindowsPosition / 3.5}%) scale(0.75)`
      images[5].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.3px)`
    }

    if (images[6]) {
      images[6].style.transform = `translateY(${-WindowsPosition / 4}%) scale(0.7)`
      images[6].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.35px)`
    }

    if (images[7]) {
      images[7].style.transform = `translateY(${-WindowsPosition / 4.5}%) scale(0.65)`
      images[7].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.4px)`
    }
  }

  const scrollAnimationHomePage = () => {
    let WindowsPosition = window.pageYOffset
    let windowsHeight = window.innerHeight

    let aboutMe = document.getElementsByClassName('appMainAboutMe')

    if (WindowsPosition + windowsHeight > aboutMe[0].offsetTop) {
      setSideShow(true)
    } else {
      setSideShow(false)
    }

    let Skill = document.getElementsByClassName('appMainSkill')
    let Portfolio = document.getElementsByClassName('appMainProjectContainer')

    if (WindowsPosition + windowsHeight > Portfolio[0].offsetTop) {
      setSideText('portfolio')
    } else if (WindowsPosition + windowsHeight > Skill[0].offsetTop) {
      setSideText('skill')
    } else {
      setSideText('about me')
    }
  }

  return <></>
}

export default Animation
