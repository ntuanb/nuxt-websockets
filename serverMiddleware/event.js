const io = require("socket.io-client");

const socket = io('https://www.test-t6dnbai-rmibawpogbfjw.au.platformsh.site/');

const bodyParser = require('body-parser')

const app = require('express')()

 

app.use(bodyParser.json())

app.all('/', async (req, res) => {

  console.log(req.body)
 

  socket.emit('test', req.body);

  res.json('Success')

});

module.exports = app