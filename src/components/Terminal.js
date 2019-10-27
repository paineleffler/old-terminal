import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import History from './History'
import Command from './Command'

const TerminalContainer = styled.div`
  margin: 1.5rem;
  font-size: 2rem;
`

const Terminal = () => {
  return (
    <TerminalContainer>
      <Header />
      <History />
      <Command />
    </TerminalContainer>
  )
}

export default Terminal
