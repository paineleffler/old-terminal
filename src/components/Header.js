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

const MacOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`

const Circle = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  :first-child {
    background-color: #FE6057;
  }
  :nth-child(2) {
    background-color: #FEBD2E;
    margin-left: 0.55rem;
  }
  :last-child {
    background-color: #29CE42;
    margin-left: 0.55rem;
  }
`

export default function Header () {
  const [directory] = useRecoilState(directoryState)

  return (
    <TopBar>
      <MacOptions>
        <Circle />
        <Circle />
        <Circle />
      </MacOptions>
      <CenterContainer>guest@{window.location.host}:&nbsp;~/{directory}</CenterContainer>
    </TopBar>
  )
}
