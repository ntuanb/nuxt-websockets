export {}

 

const bodyParser = require('body-parser')

const app = require('express')()

 

app.use(bodyParser.json())

 

const io = require("socket.io")(3001, {

  cors: {

    origin: '*',

  }

});

 io.on('connect', () => {
   console.log('connected')
 })
 io.on('message', (d) => {
   console.log(d)
 })

app.all('/', async (req, res) => {

  console.log(req.body)

 

  io.emit('event', req.body);

 

  res.json('Success')

});

 

module.exports = app