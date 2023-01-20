import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ReactComponent as ArrowNext } from './icons/ArrowNext.svg'

import { ReactComponent as Upwork1SVG } from './icons/Upwork1.svg'
import { ReactComponent as GitHub1SVG } from './icons/GitHub1.svg'
import { ReactComponent as LinkedIn1SVG } from './icons/LinkedIn1.svg'

//import HomePage from './pages/homePage/HomePage'
//import ProjectPage from './pages/ProjectPage/ProjectPage'
import ProjectPageV2 from './pages/ProjectPageV2/ProjectPage'

import MainPage from './pages/MainPage/MainPage'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { DataProvider } from './contexts/DataContext'

import ReactGA from 'react-ga4'
ReactGA.initialize('G-SWX9EVG3B1')

const App = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleUpwork = () => {
    window.open('https://www.upwork.com/freelancers/~015f01f9f5844e868c')
  }

  const handleGitHub = () => {
    window.open('https://github.com/TheMuCiT')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/karolisvilimas/')
  }

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/project/:Id' element={<ProjectPageV2 />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        {/* <Animation /> */}
      </BrowserRouter>
      <Footer />
      <div className='ScrollToTop' onClick={ScrollTop}>
        <ArrowNext className='ScrollToTopSVG' />
      </div>
      <div className='MainContact'>
        <Upwork1SVG className='MainContactIcon' onClick={handleUpwork} />
        <GitHub1SVG className='MainContactIcon' onClick={handleGitHub} />
        <LinkedIn1SVG className='MainContactIcon' onClick={handleLinkedIn} />
      </div>
    </DataProvider>
  )
}

export default App
