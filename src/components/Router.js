import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { ThemeContext } from './ThemeContextProvider'
import Themes from '../config/Themes'
import TerminalPage from './TerminalPage'
import NotFoundPage from './NotFoundPage'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    background: ${props => (props.background)};
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

function Router () {
  const { theme } = useContext(ThemeContext)

  return (
    // temporary random default
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyle background={Themes[theme].background} />
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
