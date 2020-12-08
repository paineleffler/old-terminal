import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import PropTypes from 'prop-types'

import { branchState, directoryState, gitChangesState } from '../lib/Atoms'

const Container = styled.div`
  display: flex;
`

const Arrow = styled.span`
  font-weight: 600;
  margin-right: 1rem;
  color: ${p => p.success ? p.theme.success : p.theme.error};
`

const CurrentDirectory = styled.span`
  color: ${props => (props.theme.directory)};
  font-weight: 600;
  margin-right: 1rem;
`

const Git = styled.span`
  color: ${props => (props.theme.secondary)};
  font-weight: 600;
  margin-right: 1rem;
`

const Branch = styled.span`
  color: ${props => (props.theme.error)};
`

const X = styled.span`
  color: ${props => (props.theme.tertiary)};
  margin-right: 1rem;
`

export default function Prefix (props) {
  const { success } = props
  const [branch] = useRecoilState(branchState)
  const [directory] = useRecoilState(directoryState)
  const [gitChanges] = useRecoilState(gitChangesState)

  return (
    <Container>
      <Arrow success={success}>→</Arrow>
      <CurrentDirectory>{directory}</CurrentDirectory>
      <Git>git:(<Branch>{branch}</Branch>)</Git>
      { gitChanges && <X>&#10008;</X> }
    </Container>
  )
}

Prefix.propTypes = {
  success: PropTypes.bool
}
