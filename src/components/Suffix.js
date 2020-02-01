import React from 'react'
import styled from 'styled-components'

const Cursor = styled.span`
  color: ${props => (props.theme.cursor)};
  line-height: 2rem;
  vertical-align: text-bottom;
  -webkit-animation: blink 1s step-end infinite;
  animation: blink 1s step-end infinite;

  @-webkit-keyframes blink {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }

  @keyframes blink {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }
`

const Suffix = () => {
  return <Cursor>&#9612;</Cursor>
}

export default Suffix
