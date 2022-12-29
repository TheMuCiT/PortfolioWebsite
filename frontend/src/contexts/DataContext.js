import { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [sideShow, setSideShow] = useState(false)
  const [sideText, setSideText] = useState('')

  return (
    <DataContext.Provider value={{ sideShow, setSideShow, sideText, setSideText }}>
      {children}
    </DataContext.Provider>
  )
}
