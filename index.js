const express = require('express')
const app = express()
const port = 3000

const items = require('./routes/items.js')
app.use('/api', items)

const birds = require('./routes/birds.js')
app.use('/birds', birds)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})