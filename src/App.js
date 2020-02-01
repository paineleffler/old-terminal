import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { ThemeContextProvider } from './components/ThemeContextProvider'
import Router from './components/Router'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

@media screen and (max-width: 767px) {
  html {
    font-size: 7.5px;
  }
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 10px;
  }
}

@media screen and (min-width: 2200px) {
  html {
    font-size: 12.5px;
  }
}
`

function App (props) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Router />
    </ThemeContextProvider>
  )
}

export default App
