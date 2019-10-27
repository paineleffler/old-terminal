import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Arrow = styled.span`
  font-weight: 600;
  margin-right: 1rem;
  ${props => props.success
  ? css`
    color: #67F86F;
  `
  : css`
    color: #FD6F6B;
  `}
`

const CurrentDirectory = styled.span`
  color: #68FDFE;
  font-weight: 600;
  margin-right: 1rem;
`

const Git = styled.span`
  color: #6A76FB;
  font-weight: 600;
  margin-right: 1rem;
`

const Branch = styled.span`
  color: #FD6F6B;
`

const X = styled.span`
  color: #FFFA72;
  margin-right: 1rem;
`

const Prefix = (props) => {
  // did last command error or work?
  const { success } = props
  return (
    <span>
      <Arrow success={success}>→</Arrow>
      <CurrentDirectory>website</CurrentDirectory>
      <Git>git:(<Branch>master</Branch>)</Git><X>&#10008;</X>
    </span>
  )
}

// type is one of 'output' or 'input'
// Output does not have a line prefix
// Input does have a line prefix

Prefix.propTypes = {
  success: PropTypes.bool,
  type: PropTypes.string
}

export default Prefix
