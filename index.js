
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
  socket.on('picture', (data) => socket.broadcast.emit('picutre', data));
  socket.on('pictureFromHolo', (data) => socket.broadcast.emit('pictureFromHolo', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
