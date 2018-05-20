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

  //var  = document.getElementById('');
  var menu = document.getElementById('menu');
  var main = document.getElementById('main');
  var move = document.getElementById('move');
  var help = document.getElementById('help');
  var reset = document.getElementById('reset');
  var clear = document.getElementById('clear');
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');
  var settings = document.getElementById('settings');
  var volume = document.getElementById('volume');
  var brightness = document.getElementById('brightness');
  var increase = document.getElementById('increase');
  var procedures = document.getElementById('procedures');
  var biometrics = document.getElementById('biometrics');
  var capture = document.getElementById('capture');
  var toggle = document.getElementById('toggle');
  var musicoff = document.getElementById('musicoff');
  var disablealarm = document.getElementById('disablealarm');
  var reroutepower = document.getElementById('Reroute Power');
  var lightswitch = document.getElementById('lightswitch');

  /*
  loadButton.addEventListener('mousedown', loadPicture, false);
  sendButton.addEventListener('mousedown', sendPicture, false);
  spaceSuitButton.addEventListener('mousedown', spaceSuitPicutre, false);

  socket.on('pictureFromHolo', onPictureReceived);
  socket.on('picture', onPictureSent);

  function onPictureReceived(data) {

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
*/
})();
