var height = 600,
width = 600,
sideLen = 200,
sideNumb = 5,
rotation = 60, // in radians
limit = document.getElementById("limit").getContext("2d");

// uncomment to enter rotation in degrees.
// rotation *= Math.PI/180;

var xCenter = width/2,
yCenter = height/2,
coordinates = [];


var line1 = document.getElementById("line1").getContext("2d");
var line2 = document.getElementById("line2").getContext("2d");
var line3 = document.getElementById("line3").getContext("2d");
var line4 = document.getElementById("line4").getContext("2d");
var line5 = document.getElementById("line5").getContext("2d");

var circle1 = document.getElementById("circle1").getContext("2d");
var circle2 = document.getElementById("circle2").getContext("2d");
var circle3 = document.getElementById("circle3").getContext("2d");
var circle4 = document.getElementById("circle4").getContext("2d");
var circle5 = document.getElementById("circle5").getContext("2d");

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
  line.strokeStyle = '#455f72'; //dark blue
  line.lineWidth = 1;
  line.stroke();
}

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

  //
  // Draw circles
  //
  circle.beginPath();
  circle.arc(xCoord,yCoord,100,0,2*Math.PI);
  circle.fillStyle = "#5e829b"; //medium blue
  circle.fill();
}


//
// Draw Limit
//

limit.beginPath();
limit.moveTo(xCenter +  sideLen * Math.cos(rotation), yCenter +  sideLen *  Math.sin(rotation));

for(var i = 1; i <= sideNumb; i += 1) {

  var xCoord = xCenter +  sideLen * Math.cos(rotation + (i * 2 * Math.PI / sideNumb));
  var yCoord = yCenter +  sideLen *  Math.sin(rotation + (i * 2 * Math.PI / sideNumb));

  limit.lineTo(xCoord, yCoord);

  drawLine(i, xCoord, yCoord);
}

limit.strokeStyle = '#455f72'; //dark blue
limit.lineWidth = 1;
limit.stroke();


//
// Draw Persona
//
var height = 600,
width = 600,
sideLen = 100,
sideNumb = 5,
rotation = 60, // in radians
persona = document.getElementById("persona").getContext("2d");

// uncomment to enter rotation in degrees.
// rotation *= Math.PI/180;

var xCenter = width/2,
    yCenter = height/2;

persona.beginPath();
persona.moveTo(xCenter +  sideLen * Math.cos(rotation), yCenter +  sideLen *  Math.sin(rotation));

for(var i = 1; i <= sideNumb; i += 1) {

var xCoord = xCenter +  sideLen * Math.cos(rotation + (i * 2 * Math.PI / sideNumb));
var yCoord = yCenter +  sideLen *  Math.sin(rotation + (i * 2 * Math.PI / sideNumb));

persona.lineTo(xCoord, yCoord);
}

persona.fillStyle = "#2da4ff"; //light blue
persona.fill();





//
// Draw Progress
//
var height = 800,
width = 800,
sideLen = 300,
sideNumb = 5,
rotation = 60, // in radians
progress = document.getElementById("progress").getContext("2d");

// uncomment to enter rotation in degrees.
// rotation *= Math.PI/180;

var xCenter = width/2,
    yCenter = height/2;

progress.beginPath();
progress.moveTo(xCenter +  sideLen * Math.cos(rotation), yCenter +  sideLen *  Math.sin(rotation));

for(var i = 1; i <= sideNumb; i += 1) {

var xCoord = xCenter +  sideLen * Math.cos(rotation + (i * 2 * Math.PI / sideNumb));
var yCoord = yCenter +  sideLen *  Math.sin(rotation + (i * 2 * Math.PI / sideNumb));

progress.lineTo(xCoord, yCoord);

//Draw Circles
drawCircle(i, xCoord, yCoord);
}

progress.strokeStyle = '#455f72'; //dark blue
progress.lineWidth = 1;
progress.stroke();
