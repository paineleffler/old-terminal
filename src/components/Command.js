import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Prefix from './Prefix'
import Suffix from './Suffix'

const StyledCommand = styled.span`
  font-weight: 400;
  color: ${props => (props.theme.color)};
`
const CommandContainer = styled.div`
`

const Command = (props) => {
  const { success, type, branch, currentDirectory, changes } = props

  return (
    <CommandContainer>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand></StyledCommand>
      <Suffix />
    </CommandContainer>
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
