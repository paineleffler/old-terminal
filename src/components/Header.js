import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { directoryState } from '../lib/Atoms'

const TopBar = styled.div`
  margin-bottom: 3rem;
`

const CenterContainer = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`

export default function Header () {
  const [directory] = useRecoilState(directoryState)

  return (
    <TopBar>
      <CenterContainer>{`guest@${window.location.host}:~/${directory}`}</CenterContainer>
    </TopBar>
  )
}
