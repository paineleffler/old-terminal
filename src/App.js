import React from 'react'
import { RecoilRoot } from 'recoil'

import Router from './components/Router'

export default function App (props) {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  )
}
