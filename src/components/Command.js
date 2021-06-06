import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { commandState, historyState } from '../lib/Atoms'
import Prefix from './Prefix'
import Suffix from './Suffix'
import { StringMatching } from '../lib/StringMatching'
import TextMessage from '../lib/TextMessage'

const StyledCommand = styled.span`
  word-break: break-all;
`

export default function Command (props) {
  const { success, type, branch, currentDirectory, changes } = props
  const [command, setCommand] = useRecoilState(commandState)
  const [history, setHistory] = useRecoilState(historyState)

  const ENTER = 13
  const BACKSPACE = 8

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler)
    return () => {
      window.removeEventListener('keydown', keyPressHandler)
    }
  }, [command])

  async function getOutput (command) {
    if (typeof StringMatching[command] === 'string') {
      return StringMatching[command]
    } else if (/^node text.js/.test(command)) {
      return TextMessage(command)
    } else {
      return `zsh: command not found: ${command}`
    }
  }

  async function keyPressHandler (keyEvent) {
    const { key, keyCode } = keyEvent

    if (keyCode === BACKSPACE) {
      command.length > 0 && setCommand(command.slice(0, command.length - 1))
    } else if (keyCode === ENTER) {
      if (command === 'clear') {
        setHistory([])
      } else {
        setHistory([
          ...history,
          {
            type: 'input',
            content: command,
            success: true
          },
          {
            type: 'output',
            content: await getOutput(command),
            success: true
          }])
      }
      setCommand('')
    } else {
      setCommand(`${command}${key}`)
    }
  }

  return (
    <span>
      <Prefix success={success} type={type} branch={branch} currentDirectory={currentDirectory} changes={changes} />
      <StyledCommand>{command}</StyledCommand>
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
