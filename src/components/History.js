import React from 'react'
import { useRecoilState } from 'recoil'

import { historyState } from '../lib/Atoms'
import Line from './Line'

export default function History () {
  const [history] = useRecoilState(historyState)

  return (
    history.map(({ type, content, success }, index) => {
      return <Line type={type} content={content} success={success} key={index} />
    })
  )
}
