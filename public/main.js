'use strict';

(function() {

  var socket = io();
  var canvas = document.getElementsByClassName('whiteboard')[0];
  var colors = document.getElementsByClassName('color');
  var loadButton = document.getElementById('load');
  var sendButton = document.getElementById('send');
  var spaceSuitButton = document.getElementById('spacesuit');
  var picture = document.getElementById('picture');
  var context = canvas.getContext('2d');
  var newtext = document.getElementById('newtext');

  var current = {
    color: 'black'
  };
  var drawing = false;

  loadButton.addEventListener('mousedown', loadPicture, false);
  sendButton.addEventListener('mousedown', sendPicture, false);
  spaceSuitButton.addEventListener('mousedown', spaceSuitPicutre, false);

  canvas.addEventListener('mousedown', onMouseDown, false);
  canvas.addEventListener('mouseup', onMouseUp, false);
  canvas.addEventListener('mouseout', onMouseUp, false);
  canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

  for (var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', onColorUpdate, false);
  }

  socket.on('pictureFromHolo', onPictureReceived);
  socket.on('picture', onPictureSent);

  function drawLine(x0, y0, x1, y1, color, emit){
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = 14;
    context.stroke();
    context.closePath();

    if (!emit) { return; }
    var w = canvas.width;
    var h = canvas.height;
  }

  function onMouseDown(e){
    drawing = true;
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onMouseUp(e){
    if (!drawing) { return; }
    drawing = false;
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
  }

  function onMouseMove(e){
    if (!drawing) { return; }
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onColorUpdate(e){
    current.color = e.target.className.split(' ')[1];
  }

  // limit the number of events per second
  function throttle(callback, delay) {
    var previousCall = new Date().getTime();
    return function() {
      var time = new Date().getTime();

      if ((time - previousCall) >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  function onPictureReceived(data) {
    console.log("pictured received");
    console.log(data);
    var blob = new Blob([data],{type: "image/png"});

    var new_img = new Image();
    new_img.onload = drawSuitImage;
    new_img.src = window.URL.createObjectURL(blob);
  }

  function onPictureSent(data) {
    console.log(data);
    var new_img = new Image();
    new_img.onload = drawSentImage;
    new_img.src = data.image;
    newtext.value = data.sendtext;
  }
  function drawSentImage() {
    console.log("sentImage");
    console.log(this);
    canvas.width = this.width;
    canvas.height = this.height;
    context.drawImage(this,0,0);
  }
  function drawSuitImage() {
    console.log(this);
    console.log("trying to draw Suit Image");
    canvas.width = this.width;
    canvas.height = this.height;
    context.drawImage(this, 0, 0);
  }

  function spaceSuitPicutre() {
    var toSend = canvas.toDataURL("image/png");
    socket.emit("pictureFromHolo", toSend.toString("base64"))
  }

  function sendPicture() {
    var toSend = canvas.toDataURL("image/png");
    socket.emit("picture", {image: toSend.toString("base64"), sendtext: newtext.value})
  }

  function loadPicture() {
    var img = new Image();
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    }
    img.src = 'vroom.png';
    // onResize();
  }
})();
