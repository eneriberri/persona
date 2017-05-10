//
// Draw Lines
//
var line1 = document.getElementById("line1").getContext("2d");
var line2 = document.getElementById("line2").getContext("2d");
var line3 = document.getElementById("line3").getContext("2d");
var line4 = document.getElementById("line4").getContext("2d");
var line5 = document.getElementById("line5").getContext("2d");

var drawLine = function(i, xCoord, yCoord) {
  var line;

  switch(i) {
    case 1:
      line = line1
      break;
    case 2:
      line = line2
      break;
    case 3:
      line = line3;
      break;
    case 4:
      line = line4;
      break;
    default:
      line = line5;
  }

  line.beginPath();
  line.moveTo(xCoord,yCoord);
  line.lineTo(300,300);
  line.strokeStyle = '#1d2c38'; //dark blue
  line.lineWidth = 1;
  line.stroke();
}



//
// Draw circles
//
var circle1 = document.getElementById("circle1").getContext("2d");
var circle2 = document.getElementById("circle2").getContext("2d");
var circle3 = document.getElementById("circle3").getContext("2d");
var circle4 = document.getElementById("circle4").getContext("2d");
var circle5 = document.getElementById("circle5").getContext("2d");

var drawCircle = function(i, xCoord, yCoord) {
  var circle;

  switch(i) {
    case 1:
      circle = circle1
      break;
    case 2:
      circle = circle2
      break;
    case 3:
      circle = circle3;
      break;
    case 4:
      circle = circle4;
      break;
    default:
      circle = circle5;
      console.log(xCoord);console.log(yCoord);
  }

  circle.beginPath();
  circle.arc(xCoord,yCoord,100,0,2*Math.PI);
  circle.fillStyle = "#557c99"; //medium blue
  circle.fill();
}



//
// Draw Pentagon
//

var drawPentagon = function(canvas, opts, callback) {
  var rotation = 60; //in radians
  var sideNum = 5;
  var xCenter = (opts.width)/2;
  var yCenter = (opts.height)/2;

  canvas.beginPath();
  canvas.moveTo(xCenter +  opts.sideLen * Math.cos(rotation), yCenter +  opts.sideLen *  Math.sin(rotation));

  for(var i = 1; i <= sideNum; i += 1) {
    var xCoord = xCenter +  opts.sideLen * Math.cos(rotation + (i * 2 * Math.PI / sideNum));
    var yCoord = yCenter +  opts.sideLen *  Math.sin(rotation + (i * 2 * Math.PI / sideNum));

    canvas.lineTo(xCoord, yCoord);

    if(callback) {
      callback(i, xCoord, yCoord);
    }

    // drawLine(i, xCoord, yCoord);
  }

}




//
// Limit Pentagon
//
var limitOpts = {
  height: 600,
  width: 600,
  sideLen: 200
}

var limitCanvas = document.getElementById("limit").getContext("2d");

drawPentagon(limitCanvas, limitOpts, drawLine);

limitCanvas.strokeStyle = '#1d2c38'; //dark blue
limitCanvas.lineWidth = 3;
limitCanvas.stroke();



//
// Persona Pentagon
//
var personaCanvas = document.getElementById("persona").getContext("2d");

var personaOpts = {
  height: 600,
  width: 600,
  sideLen: 100
}

drawPentagon(personaCanvas, personaOpts);

personaCanvas.fillStyle = "#2da4ff"; //light blue
personaCanvas.fill();


//
// Rim Pentagon
//
var rimCanvas = document.getElementById("rim").getContext("2d");

var rimOpts = {
  height: 800,
  width: 800,
  sideLen: 300
}

drawPentagon(rimCanvas, rimOpts, drawCircle);

rimCanvas.strokeStyle = '#557c99'; //medium blue
rimCanvas.lineWidth = 3;
rimCanvas.stroke();
