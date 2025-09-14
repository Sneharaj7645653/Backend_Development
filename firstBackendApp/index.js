const express = require('express')
const app = express()
const port = 3000


app.get('/' , (res,req)=>{
    req.send('Hello World!');
    console.log('Get request received');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})