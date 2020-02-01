import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Arrow = styled.span`
  font-weight: 600;
  margin-right: 1rem;
  ${props => props.success
  ? css`
    color: ${props => (props.theme.success)};
  `
  : css`
    color: ${props => (props.theme.error)};
  `}
`

const CurrentDirectory = styled.span`
  color: ${props => (props.theme.directory)};
  font-weight: 600;
  margin-right: 1rem;
`

const Git = styled.span`
  color: ${props => (props.theme.secondary)};
  font-weight: 600;
  margin-right: 1rem;
`

const Branch = styled.span`
  color: ${props => (props.theme.error)};
`

const X = styled.span`
  color: ${props => (props.theme.tertiary)};
  margin-right: 1rem;
`

const Prefix = (props) => {
  // did last command error or work?
  const { success, type, branch, currentDirectory, changes } = props
  return (
    type === 'input' && <span>
      <Arrow success={success}>→</Arrow>
      <CurrentDirectory>{currentDirectory}</CurrentDirectory>
      <Git>git:(<Branch>{branch}</Branch>)</Git>
      { changes && <X>&#10008;</X> }
    </span>
  )
}

// type is one of 'output' or 'input'
// Output does not have a line prefix
// Input does have a line prefix

Prefix.propTypes = {
  success: PropTypes.bool,
  type: PropTypes.string,
  branch: PropTypes.string,
  currentDirectory: PropTypes.string,
  changes: PropTypes.bool
}

export default Prefix
