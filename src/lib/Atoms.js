import { atom } from 'recoil'

const defaultHistory = [
  {
    type: 'input',
    content: 'cat hello.txt',
    success: true
  },
  {
    type: 'output',
    content: 'Hello, my website is finally getting an upgrade! New features: Hyper Term UI, Syntax Highlighting, Terminal Themes, Better Responsiveness, More Commands. I have been pretty busy recently, so this website is still under construction.'
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
