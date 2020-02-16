import React, { useContext } from 'react'

import { TerminalContext } from './TerminalContextProvider'
import Line from './Line'

const History = (props) => {
  const { history } = useContext(TerminalContext)

  return (
    history.length > 0 && history.map((line, index) => {
      return <Line type={line.type} content={line.content} key={index} />
    })
  )
}

export default History
