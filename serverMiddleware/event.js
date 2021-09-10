const bodyParser = require('body-parser')
const express = require('express');
const app = require('express')()

app.use(express.json())

const lib = require("socket.io-client");
const io = lib.connect('https://www.test-t6dnbai-rmibawpogbfjw.au.platformsh.site/', {
  reconnect: true
})

io.on('test', (msg) => {
  console.log('received from websocket server to middleware', msg);
});

app.all('/', async (req, res) => {
  io.emit('test', 'from server middleware');

  res.json(req.body)
});

module.exports = app
