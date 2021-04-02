const ValidCommands = {
  hello: 'Hello world!',
  '': '',
  taco: '🌮'
}

export function getOutput (input) {
  // nullish coalescing if u set up babel u dummy
  return typeof ValidCommands[input] === 'string' ? ValidCommands[input] : `zsh: command not found: ${input}`
}
