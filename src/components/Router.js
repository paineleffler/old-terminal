import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// import { ThemeContext } from './ThemeContextProvider'
import Themes from '../config/Themes'
import TerminalPage from './TerminalPage'
import NotFoundPage from './NotFoundPage'

function Router () {
  // const { theme, setTheme } = useContext(ThemeContext)
  const keys = Object.keys(Themes)

  return (
    // temporary random default
    <ThemeProvider theme={Themes[keys[Math.floor(Math.random() * 10) % keys.length]]}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TerminalPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
