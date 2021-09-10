const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.get('/', (req, res) => {
  res.json('success')
});

app.get('/test', (req, res) => {
  res.json('success')
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('message', (msg) => {
  console.log(msg);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

module.exports = {
  io
}
