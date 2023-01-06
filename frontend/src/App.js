import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ReactComponent as ArrowNext } from './icons/ArrowNext.svg'

//import Animation from './components/animation/Animation'
import HomePage from './pages/homePage/HomePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ProjectPageV2 from './pages/ProjectPageV2/ProjectPage'

import MainPage from './pages/MainPage/MainPage'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { DataProvider } from './contexts/DataContext'

const App = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/v2' element={<MainPage />} />
          <Route path='/projectV2/:Id' element={<ProjectPageV2 />} />
          <Route path='/project/:Id' element={<ProjectPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        {/* <Animation /> */}
      </BrowserRouter>
      <Footer />
      <div className='ScrollToTop' onClick={ScrollTop}>
        <ArrowNext className='ScrollToTopSVG' />
      </div>
    </DataProvider>
  )
}

export default App
