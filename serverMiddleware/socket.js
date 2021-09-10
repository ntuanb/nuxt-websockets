

const io = require("socket.io")(3001, {
  cors: {
    origin: '*',
  },
  transports: ['websocket']
});

export default io
