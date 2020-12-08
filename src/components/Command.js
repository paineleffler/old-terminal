import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Prefix from './Prefix'
import Suffix from './Suffix'

const Row = styled.div`
  display: flex;
  flex: wrap;
`

const StyledCommand = styled.div`
  border: none;
  outline: none;
  background: inherit;
  color: transparent;
  font-size: inherit;
  font-family: inherit;
  text-shadow: 0 0 0 ${p => p.theme.color};
  display: flex;
  min-width: 1rem;
`

export default function Command (props) {
  const { success, type, branch, currentDirectory, changes } = props
  const [input, setInput] = useState('')

  return (
    <Row>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand onKeyDown={({ key }) => { setInput(input + key) }} tabIndex={0}>{input}</StyledCommand>
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
  branch: 'main',
  currentDirectory: 'website',
  changes: false
}
