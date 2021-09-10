const io = require("socket.io-client");

const socket = io("http://localhost");

app.all('/', async (req, res) => {

  console.log(req.body)
 

  socket.emit('test', req.body);

  res.json('Success')

});
