'use strict';

(function() {

  var socket = io();

  //var  = document.getElementById('');
  socket.on('command', onCommand)
  function onCommand(data) {
    console.log(data);
  }
  var menu = document.getElementById('menu');
  menu.addEventListener('mousedown', menuDown, false);
  function menuDown() {
    socket.emit('command', 'menu');
  }
  var main = document.getElementById('main');
  main.addEventListener('mousedown', mainDown, false);
  function mainDown() {
    socket.emit('command', 'main');
  }
  var move = document.getElementById('move');
  move.addEventListener('mousedown', moveDown, false);
  function moveDown() {
    socket.emit('command', 'move');
  }
  var help = document.getElementById('help');
  help.addEventListener('mousedown', helpDown, false);
  function helpDown() {
    socket.emit('command', 'help');
  }
  var reset = document.getElementById('reset');
  reset.addEventListener('mousedown', resetDown, false);
  function resetDown() {
    socket.emit('command', 'reset');
  }
  var clear = document.getElementById('clear');
  clear.addEventListener('mousedown', clearDown, false);
  function clearDown() {
    socket.emit('command', 'clear');
  }
  var next = document.getElementById('next');
  next.addEventListener('mousedown', nextDown, false);
  function nextDown() {
    socket.emit('command', 'next');
  }
  var previous = document.getElementById('previous');
  previous.addEventListener('mousedown', previousDown, false);
  function previousDown() {
    socket.emit('command', 'previous');
  }
  var settings = document.getElementById('settings');
  settings.addEventListener('mousedown', settingsDown, false);
  function settingsDown() {
    socket.emit('command', 'settings');
  }
  var volume = document.getElementById('volume');
  volume.addEventListener('mousedown', volumeDown, false);
  function volumeDown() {
    socket.emit('command', 'volume');
  }
  var brightness = document.getElementById('brightness');
  brightness.addEventListener('mousedown', brightnessDown, false);
  function brightnessDown() {
    socket.emit('command', 'brightness');
  }
  var increase = document.getElementById('increase');
  increase.addEventListener('mousedown', increaseDown, false);
  function increaseDown() {
    socket.emit('command', 'increase');
  }
  var decrease = document.getElementById('decrease');
  decrease.addEventListener('mousedown', increaseDown, false);
  function decreaseDown() {
    socket.emit('command', 'decrease');
  }
  var procedures = document.getElementById('procedures');
  procedures.addEventListener('mousedown', proceduresDown, false);
  function proceduresDown() {
    socket.emit('command', 'procedures');
  }
  var biometrics = document.getElementById('biometrics');
  biometrics.addEventListener('mousedown', biometricsDown, false);
  function biometricsDown() {
    socket.emit('command', 'biometrics');
  }
  var capture = document.getElementById('capture');
  capture.addEventListener('mousedown', captureDown, false);
  function captureDown() {
    socket.emit('command', 'capture');
  }
  var toggle = document.getElementById('toggle');
  toggle.addEventListener('mousedown', toggleDown, false);
  function toggleDown() {
    socket.emit('command', 'toggle');
  }
  var musicoff = document.getElementById('musicoff');
  musicoff.addEventListener('mousedown', musicoffDown, false);
  function musicoffDown() {
    socket.emit('command', 'musicoff');
  }
  var disablealarm = document.getElementById('disablealarm');
  disablealarm.addEventListener('mousedown', disablealarmDown, false);
  function disablealarmDown() {
    socket.emit('command', 'disablealarm');
  }
  var reroutepower = document.getElementById('reroutepower');
  reroutepower.addEventListener('mousedown', reroutepowerDown, false);
  function reroutepowerDown() {
    socket.emit('command', 'reroutepower');
  }
  var lightswitch = document.getElementById('lightswitch');
lightswitch.addEventListener('mousedown', lightswitchDown, false);
function lightswitchDown() {
  socket.emit('command', 'lightswitch');
}
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
