import React from 'react'
import { useRecoilValue } from 'recoil'

import { historyState } from '../lib/Atoms'
import Line from './Line'

export default function History () {
  const history = useRecoilValue(historyState)

  return (
    history.map(({ type, content, success }, index) => {
      return <Line type={type} content={content} success={success} key={index} />
    })
  )
}
