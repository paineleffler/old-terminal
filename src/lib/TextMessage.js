import axios from 'axios'

/**
 * command must be in format:
 * node text.js <sender phone number> <content>
 * @param {string} command
 */

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

export default async function TextMessage (command) {
  const args = command.split(' ')

  if (args.length < 4) {
    return 'ERROR Usage: node text.js <sender phone number> <message content>'
  } else if (!phoneRegex.test(args[2])) {
    return 'ERROR Invalid phone number: please provide a valid phone number. 😐'
  } else if (command.length > 300) {
    return 'ERROR Content length: hey let\'s keep it brief, I\'m not trying to read your novel. 🥱'
  } else {
    try {
      const { data: { message } } = await axios.post('/api/contact', {
        message: `FROM: ${args[2]} MESSAGE: ${command.split(`${args[0]} ${args[1]} ${args[2]}`)[1]}`
      })
      return message
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
