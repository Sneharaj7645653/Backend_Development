const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from get!')
})

app.post('/items', (req, res) => {
  res.send('Hello from post!')
})

app.put('/', (req, res) => {
  res.send('Hello from put!')
})

app.delete('/', (req, res) => {
  res.send('Hello from delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
