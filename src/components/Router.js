import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// import { ThemeContext } from './ThemeContextProvider'
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
  // const { theme, setTheme } = useContext(ThemeContext)
  const keys = Object.keys(Themes)
  const randomTheme = keys[Math.floor(Math.random() * 10) % keys.length]
  return (
    // temporary random default
    <ThemeProvider theme={Themes[randomTheme]}>
      <GlobalStyle background={Themes[randomTheme].background} />
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
