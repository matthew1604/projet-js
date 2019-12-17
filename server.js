const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const axios = require('axios');
const instance = axios.create({
  baseURL: 'https://heroku-71b3.restdb.io/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': 'fd5e08f2f5a4c33b11aaa3969ecae1ddbf35e',
    'Cache-Control': 'no-cache'
  }
});

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

