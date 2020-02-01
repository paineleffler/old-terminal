import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TopBar = styled.div`
  display: flex;
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

const Header = (props) => {
  const { currentDirectory } = props

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
        guest@{window.location.host}: ~/{currentDirectory}
      </CenterContainer>
      <RightContainer />
    </TopBar>
  )
}

Header.propTypes = {
  currentDirectory: PropTypes.string
}

Header.defaultProps = {
  currentDirectory: 'website'
}

export default Header
