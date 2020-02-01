import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  font-size: 3rem;
  font-weight: 600;
  border-right: .1rem ${props => (props.theme.color)} solid;
  padding-right: 1rem;
`

const Subtitle = styled.span`
  padding-left: 1rem;
  font-size: 2rem;
  font-weight: 400;
`

function NotFound () {
  return (
    <Container>
      <Title>404</Title><Subtitle>This is not the page you're looking for...</Subtitle>
    </Container>
  )
}

export default NotFound
