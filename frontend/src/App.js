import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Animation from './components/animation/Animation'
import HomePage from './pages/homePage/HomePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import { DataProvider } from './contexts/DataContext'

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project/:Id' element={<ProjectPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Animation />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
