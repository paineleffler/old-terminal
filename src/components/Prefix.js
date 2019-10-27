import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Arrow = styled.span`
  font-weight: 600;
  margin-right: 1rem;
  ${props => props.success
  ? css`
    color: #C51E14;
  `
  : css`
    color: #1DC121;
  `}
`

const CurrentDirectory = styled.span`
  color: #20C5C6;
  font-weight: 600;
  margin-right: 1rem;
`

const Prefix = (props) => {
  // did last command error or work?
  const { success } = props
  return (
    <span>
      <Arrow success={success}>→</Arrow>
      <CurrentDirectory>~</CurrentDirectory>
    </span>
  )
}

// type is one of 'output' or 'input'
// Output does not have a line prefix
// Input does have a line prefix

Prefix.propTypes = {
  success: PropTypes.string,
  type: PropTypes.string
}

export default Prefix
