import React from 'react'
import styled from 'styled-components'

import Prefix from './Prefix'
import Suffix from './Suffix'

const StyledCommand = styled.span`
  font-weight: 300;
`

const Command = () => {
  return (
    <>
      <Prefix success={true}/>
      <StyledCommand>*input goes here*</StyledCommand>
      <Suffix />
    </>
  )
}

export default Command
