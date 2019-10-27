import React from 'react'
import PropTypes from 'prop-types'

import Prefix from './Prefix'

const Line = (props) => {
  const { content, type } = props
  return (
    type === 'input' ? <><Prefix /><p>{content}</p></> : <p>{content}</p>
  )
}

// type is one of 'output' or 'input'
// Output does not have a line prefix
// Input does have a line prefix

Line.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string
}

export default Line
