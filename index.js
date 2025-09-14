const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('hello.html', { root: __dirname }  )
})

app.post('/items', (req, res) => {
  res.send('Hello from post!')
})

app.put('/items/:id', (req, res) => {
  res.send('Hello from put!')
})

app.delete('/items/:id', (req, res) => {
  res.send('Hello from delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
