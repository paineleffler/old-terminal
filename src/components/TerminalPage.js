import React from 'react'

import StyledPage from './StyledPage'
import Terminal from './Terminal'
import { TerminalContextProvider } from './TerminalContextProvider'

function TerminalPage () {
  return (
    <StyledPage>
      <TerminalContextProvider>
        <Terminal />
      </TerminalContextProvider>
    </StyledPage>
  )
}

export default TerminalPage
