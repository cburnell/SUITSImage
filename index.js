
// NOTE: Replaced these import statements with the one below
//       when the server unexpectedly stopped working.
//       No idea why they stopped working but we're going with it.

//const express = require('express');
//const app = express();
//const http = require('http').Server(app);
//const io = require('socket.io')(http);
//const port = process.env.PORT || 3000;

var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server);
var fs = require('fs');

app.use(express.static(__dirname + '/'));

function onConnection(socket){
  console.log('Connection made');
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
  socket.on('picture', (data) => socket.broadcast.emit('picture', data));
  socket.on('pictureFromHolo', function (data) {
				socket.broadcast.emit('pictureFromHolo', data);
				console.log("from hololens");
				}
);
  socket.on('command', (data) => socket.broadcast.emit('command', data));
}

io.on('connection', onConnection);

//http.listen(port, () => console.log('listening on port ' + port));
