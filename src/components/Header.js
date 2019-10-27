import React from 'react'
import styled from 'styled-components'

const TopBar = styled.div`
  display: flex;
  flex: 1;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: space-between;
`

const RightContainer = styled.div`
  align-self: flex-start;
  width: .5rem;
`

const LeftContainer = styled.div`
  align-self: flex-start;
`

const CenterContainer = styled.div`
  text-align: center;
  width: 50rem;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

const MacOptions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 7rem;
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
  }
  :last-child {
    background-color: #29CE42;
  }
`

const Header = () => {
  // change this later into a prop
  const path = '/website'

  return (
    <TopBar>
      <LeftContainer>
        <MacOptions>
          <Circle />
          <Circle />
          <Circle />
        </MacOptions>
      </LeftContainer>
      <CenterContainer>
        guest@paineleffler.com: ~{path}
      </CenterContainer>
      <RightContainer />
    </TopBar>
  )
}

export default Header
