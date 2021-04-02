const ValidCommands = {
  hello: 'Hello world!',
  '': '',
  taco: '🌮',
  jacob: '🌽🌽🌽🌽🌽🌽🌽🌽🌽🌽🌽🌽🌽',
  'cat hello.txt': 'Hi! I\'m Paine and welcome to my terminal. There is still a lot missing but bear with me.',
  'cat skills.txt': 'JavaScript NodeJS React HTML CSS UI/UX',
  'cat portfolio.txt': 'Visit: https://paineleffler.com',
  'cat about.txt': 'I am a full stack engineer at Apple  and I am passionate about crafting frontend experiences.',
  'git status': 'On branch main\nYour branch is up to date with \'origin/main\'',
  ls: 'about.txt hello.txt portfolio.txt skills.txt'
}

export function getOutput (input) {
  // nullish coalescing if u set up babel u dummy
  return typeof ValidCommands[input] === 'string' ? ValidCommands[input] : `zsh: command not found: ${input}`
}
