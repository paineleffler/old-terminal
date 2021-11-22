import { atom } from 'recoil'

const defaultHistory = [
  {
    type: 'input',
    content: 'cat hello.txt',
    success: true
  },
  {
    type: 'output',
    content: 'Hi! I\'m Paine and welcome to my terminal. There is still a lot missing but bear with me.'
  }
]

export const themeState = atom({
  key: 'themeState',
  default: 'default'
})

export const branchState = atom({
  key: 'branchState',
  default: 'main'
})

export const directoryState = atom({
  key: 'directoryState',
  default: 'website'
})

export const historyState = atom({
  key: 'historyState',
  default: defaultHistory
})

export const commandState = atom({
  key: 'commandState',
  default: ''
})

export const gitChangesState = atom({
  key: 'gitChangesState',
  default: false
})

export const pastCommands = atom({
  key: 'pastCommands',
  default: []
})
