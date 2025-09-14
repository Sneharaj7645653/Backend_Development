const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('/Users/sneharaj/Documents/Github Repos/Backend_Development/hello.html' )
})
  
router.put('/:id', (req, res) => {
  res.send('Hello World! from put')
})

router.post('/item', (req, res) => {
  res.send('Hello World! from post')
})

router.delete('/', (req, res) => {
  res.json({x:1, y:2});
})




module.exports = router