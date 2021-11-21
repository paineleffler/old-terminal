import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Themes from '../lib/Themes'
import TerminalPage from './pages/TerminalPage'
import NotFoundPage from './pages/NotFoundPage'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Menlo Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Menlo Regular'), url('Menlo-Regular.woff') format('woff');
  }
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    font-weight: 300;
    font-family: Menlo Regular, DejaVu Sans Mono, Consolas, Lucida Console, monospace;
    background: ${props => (props.background)};
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 16px;
    }
  }
`

const PossibleThemes = ['default', 'solarized', 'criollo']
const theme = PossibleThemes[Math.floor(Math.random() * 3)]

export default function Router () {
  return (
    // temporary random default
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyle background={Themes[theme].background} />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TerminalPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
