const express = require('express')
const path = require('path')
var twilio = require('twilio')
var bodyParser = require('body-parser')
require('dotenv').config()

var accountSid = process.env.SID
var authToken = process.env.TOKEN
var client = new twilio(accountSid, authToken)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) })
app.post('/api/contact', (req, res) => {
  if (!req.body.message) {
    res.status(400).send('Please provide a message.')
  }
  client.messages.create({
    body: `${req.body.message}`,
    to: process.env.MY_NUMBER,
    from: process.env.TWILIO_NUMBER
  }).then(() => {
    res.json({ message: 'Your text message was sent!' })
  }).catch(error => {
    res.json(
      { message: `There was an error with Twilio 🙁. ${error}` }
    )
  })
})
