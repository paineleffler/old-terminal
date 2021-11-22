import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { historyState } from '../lib/Atoms'
import Prefix from './Prefix'
import Suffix from './Suffix'
import { StringMatching } from '../lib/StringMatching'
import TextMessage from '../lib/TextMessage'

const StyledCommand = styled.span`
  word-break: break-all;
  caret-color: transparent;
  :focus {
    outline: none;
  }
`

export default function Command (props) {
  const { success, type, branch, currentDirectory, changes } = props
  const [history, setHistory] = useRecoilState(historyState)

  const commandInput = useRef(null)

  const DISALLOWED_KEYCODES = [10, 13]

  useEffect(() => {
    commandInput.current.focus()
    commandInput.current.addEventListener('keydown', e => {
      if (DISALLOWED_KEYCODES.includes(e.keyCode)) {
        e.preventDefault()
      }
    })

    window.addEventListener('keydown', keyPressHandler)
    window.addEventListener('click', clickHandler)

    return () => {
      window.removeEventListener('keydown', keyPressHandler)
      window.removeEventListener('click', clickHandler)
    }
  }, [history])

  async function getOutput (command) {
    if (typeof StringMatching[command] === 'string') {
      return StringMatching[command]
    } else if (/^node text.js/.test(command)) {
      return TextMessage(command)
    } else {
      return `zsh: command not found: ${command}`
    }
  }

  function clickHandler () {
    commandInput.current.focus()
  }

  async function keyPressHandler (keyEvent) {
    const { keyCode } = keyEvent
    const inputValue = commandInput.current.innerText
    const enterKeys = [10, 13]
    if (enterKeys.includes(keyCode)) {
      if (inputValue === 'clear' || inputValue === 'c') {
        setHistory([])
      } else if (inputValue === 'exit') {
        window.close()
      } else {
        setHistory([
          ...history,
          {
            type: 'input',
            content: inputValue,
            success: true
          },
          {
            type: 'output',
            content: await getOutput(inputValue),
            success: true
          }
        ])
      }
      commandInput.current.innerHTML = ''
    }
  }

  return (
    <span>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand tabIndex={0} ref={commandInput} contentEditable></StyledCommand>
      <Suffix />
    </span>
  )
}

Prefix.propTypes = {
  success: PropTypes.bool,
  type: PropTypes.string,
  branch: PropTypes.string,
  currentDirectory: PropTypes.string,
  changes: PropTypes.bool
}

Prefix.defaultProps = {
  success: true,
  type: 'input',
  branch: 'main',
  currentDirectory: 'website',
  changes: false
}
