import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import History from './History'
import Command from './Command'

const TerminalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
`

export default function Terminal () {
  return (
    <TerminalContainer>
      <Header />
      <History />
      <Command />
    </TerminalContainer>
  )
}
