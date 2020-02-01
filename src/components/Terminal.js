import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './Header'
import History from './History'
import Command from './Command'

const TerminalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
  font-size: 2rem;
`

const Terminal = () => {
  const [success, setSuccess] = useState(true)
  const [type, setType] = useState('input')
  const [branch, setBranch] = useState('master')
  const [currentDirectory, setCurrentDirectory] = useState('website')
  const [changes, setChanges] = useState(false)

  return (
    <TerminalContainer>
      <Header currentDirectory={currentDirectory} />
      <History />
      <Command success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
    </TerminalContainer>
  )
}

export default Terminal
