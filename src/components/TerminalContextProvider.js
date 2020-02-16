import React, { useState } from 'react'

const TerminalContext = React.createContext({})

function TerminalContextProvider (props) {
  const [success, setSuccess] = useState(true)
  const [type, setType] = useState('input')
  const [branch, setBranch] = useState('master')
  const [currentDirectory, setCurrentDirectory] = useState('website')
  const [changes, setChanges] = useState(false)
  const [history, setHistory] = useState([
    {
      type: 'input',
      content: 'cat hello.txt'
    },
    {
      type: 'output',
      content: 'Hello, my website is finally getting an upgrade! New features: Hyper Term UI, Syntax Highlighting, Terminal Themes, Better Responsiveness, More Commands.'
    }
  ])

  return (
    <TerminalContext.Provider value={{ success, setSuccess, type, setType, branch, setBranch, currentDirectory, setCurrentDirectory, changes, setChanges, history, setHistory }}>
      { props.children }
    </TerminalContext.Provider>
  )
}

export { TerminalContextProvider, TerminalContext }
