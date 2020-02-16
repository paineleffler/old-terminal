import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { ThemeContext } from './ThemeContextProvider'
import Themes from '../config/Themes'
import TerminalPage from './TerminalPage'
import NotFoundPage from './NotFoundPage'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Menlo Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Menlo Regular'), url('Menlo-Regular.woff') format('woff');
  }
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-weight: 300;
    font-family: Menlo Regular, DejaVu Sans Mono, Consolas, Lucida Console, monospace;
    background: ${props => (props.background)};
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 8px;
    }
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 2200px) {
    html {
      font-size: 12px;
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
