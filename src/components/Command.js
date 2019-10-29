import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Prefix from './Prefix'
import Suffix from './Suffix'

const StyledCommand = styled.span`
  font-weight: 300;
`

const Command = (props) => {
  const { success, type, branch, currentDirectory, changes } = props

  return (
    <>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand>*input goes here*</StyledCommand>
      <Suffix />
    </>
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
