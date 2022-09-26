import React from 'react'
import './animation.css'
const Animation = () => {
  window.onscroll = function () {
    if (window.location.pathname === '/project') {
      scrollAnimation()
    } else if (window.location.pathname === '/') {
      scrollAnimationHomePage()
    }
  }

  const scrollAnimation = () => {
    let images = document.getElementsByClassName('projectImage')
    let WindowsPosition = window.pageYOffset / 5

    images[0].style.transform = `translateY(${-WindowsPosition}%)`
    images[0].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) `

    images[1].style.transform = `translateY(${-WindowsPosition / 2}%) scale(0.9)`
    images[1].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.6px)`

    images[2].style.transform = `translateY(${-WindowsPosition / 3}%) scale(0.8)`
    images[2].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(0.8px)`

    images[3].style.transform = `translateY(${-WindowsPosition / 4}%) scale(0.7)`
    images[3].style.filter = `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) blur(1.2px)`
  }

  const scrollAnimationHomePage = () => {}

  return <></>
}

export default Animation
