import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Prefix from './Prefix'

const LineContainer = styled.span`
  // word-break: break-all;
`

export default function Line (props) {
  const { content, type, success } = props
  return (
    type === 'input'
      ? <LineContainer>
        <Prefix success={success} />
        {content}
      </LineContainer>
      : <>{content}</>
  )
}

Line.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  success: PropTypes.bool
}
