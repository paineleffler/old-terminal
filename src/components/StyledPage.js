import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: ${props => (props.theme.background)};
  color: ${props => (props.theme.color)};
  ::selection {
    background-color: ${props => (props.theme.cursor)};
    color: ${props => (props.theme.color)};
  }
`

function StyledPage (props) {
  return (
    <PageContainer>
      { props.children }
    </PageContainer>
  )
}

export default StyledPage
