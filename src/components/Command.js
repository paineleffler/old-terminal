import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Prefix from './Prefix'
import Suffix from './Suffix'

const Row = styled.span``

const StyledCommand = styled.span`
  outline: none;
  background: inherit;
  color: transparent;
  font-size: inherit;
  font-family: inherit;
  text-shadow: 0 0 0 ${p => p.theme.color};
  min-width: 1rem;
`

const Command = (props) => {
  const { success, type, branch, currentDirectory, changes } = props
  const [input, setInput] = useState('')

  return (
    <Row>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand spellCheck={false} value={input} contentEditable={false} onChange={e => { setInput(e.target.value)}}></StyledCommand>
      <Suffix />
    </Row>
  )
}

Prefix.propTypes = {
  success: PropTypes.bool,
  type: PropTypes.string,
  branch: PropTypes.string,
  currentDirectory: PropTypes.string,
  changes: PropTypes.bool
}

Prefix.defaultProps = {
  success: true,
  type: 'input',
  branch: 'master',
  currentDirectory: 'website',
  changes: false
}

export default Command
