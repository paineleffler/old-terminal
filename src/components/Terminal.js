import React, { useContext } from 'react'
import styled from 'styled-components'

import Header from './Header'
import History from './History'
import Command from './Command'
import { TerminalContext } from './TerminalContextProvider'

const TerminalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
  font-size: 2rem;
`

const Terminal = () => {
  const { success, currentDirectory, type, branch, changes } = useContext(TerminalContext)

  return (
    <TerminalContainer>
      <Header currentDirectory={currentDirectory} />
      <History />
      <Command success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
    </TerminalContainer>
  )
}

export default Terminal
