import { io } from './io'

app.all('/', async (req, res) => {

  console.log(req.body)

 

  socket.emit('event', req.body);

 

  res.json('Success')

});
