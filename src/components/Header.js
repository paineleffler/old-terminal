import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { directoryState } from '../lib/Atoms'

const TopBar = styled.div`
  margin-bottom: 5rem;
`

const CenterContainer = styled.div`
  font-size: 1.2rem;
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  :first-child {
    background-color: #FE6057;
  }
  :nth-child(2) {
    background-color: #FEBD2E;
    margin-left: 1.25rem;
  }
  :last-child {
    background-color: #29CE42;
    margin-left: 1.25rem;
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
