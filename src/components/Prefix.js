import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import PropTypes from 'prop-types'

import { branchState, directoryState, gitChangesState } from '../lib/Atoms'

const Arrow = styled.span`
  font-weight: 600;
  color: ${p => p.success ? p.theme.success : p.theme.error};
  ::after {
    content: ' ';
    white-space: pre;
  }
`

const CurrentDirectory = styled.span`
  color: ${props => (props.theme.directory)};
  font-weight: 600;
  ::after {
    content: ' ';
    white-space: pre;
  }
`

const Git = styled.span`
  color: ${props => (props.theme.secondary)};
  font-weight: 600;
  ::after {
    content: ' ';
    white-space: pre;
  }
`

const Branch = styled.span`
  color: ${props => (props.theme.error)};
`

const X = styled.span`
  color: ${props => (props.theme.tertiary)};
  ::after {
    content: ' ';
    white-space: pre;
  }
`

export default function Prefix (props) {
  const { success } = props
  const [branch] = useRecoilState(branchState)
  const [directory] = useRecoilState(directoryState)
  const [gitChanges] = useRecoilState(gitChangesState)

  return (
    <>
      <Arrow success={success}>→</Arrow>
      <CurrentDirectory>{directory}</CurrentDirectory>
      <Git>git:(<Branch>{branch}</Branch>)</Git>
      { gitChanges && <X>&#10008;</X> }
    </>
  )
}

Prefix.propTypes = {
  success: PropTypes.bool
}
