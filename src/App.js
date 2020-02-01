import React from 'react'

import { ThemeContextProvider } from './components/ThemeContextProvider'
import Router from './components/Router'

function App (props) {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  )
}

export default App
