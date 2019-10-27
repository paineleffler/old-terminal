import React from 'react'
import PropTypes from 'prop-types'

import Line from './Line'

const History = (props) => {
  const { previousLines } = props

  return (
    previousLines > 0 && previousLines.map((line, index) => {
      return <Line type={line.type} content={line.content} key={index} />
    })
  )
}

History.propTypes = {
  previousLines: PropTypes.array
}

export default History
