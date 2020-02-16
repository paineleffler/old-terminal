import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: auto;
`

const Title = styled.span`
  color: ${p => p.theme.error}; 
  font-size: 3rem;
  font-weight: 600;
`

const Subtitle = styled.span`
  margin: 2rem 4rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`

const StyledLink = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: 400;
  a {
    color: ${p => p.theme.secondary};
    text-decoration: none;
    transition: color 0.25s;
  }
  a:hover 
  {
    color: ${p => p.theme.directory};
    text-decoration:none; 
    cursor:pointer;  
    transition: color 0.25s;
  }
`

function NotFound () {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>You're not supposed to be here...</Subtitle>
      <StyledLink>
        <Link to={'/'}>Go back</Link>
      </StyledLink>
    </Container>
  )
}

export default NotFound
