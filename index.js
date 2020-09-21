const express = require('express')
const app = express()
const port = 8081
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})