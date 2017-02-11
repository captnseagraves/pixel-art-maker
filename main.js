document.addEventListener('DOMContentLoaded', function(){

var body = document.getElementsByTagName("body")[0];
// var canvas1 = document.createElement('div');
var pixel1 = document.createElement('div');
var palette1 = document.createElement('div');
var color1 = document.createElement('div');
console.log(color1);
var clicker = {
  'current' : ""
};

body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")'
body.style.backgroundColor = "rgb(199, 73, 39)"

var titleDiv = document.createElement('div')
body.appendChild(titleDiv);
titleDiv.className = "titleDiv"
titleDiv.style.height = "100px"
titleDiv.style.width = "1200px"
titleDiv.style.fontFamily = "'Permanent Marker', cursive"
titleDiv.innerText = "Tag your turf. Leave your mark on the Internet."
titleDiv.style.textAlign = 'center'
titleDiv.style.fontSize = '3em'
titleDiv.style.paddingTop = "20px"
titleDiv.style.paddingLeft = "110px"
titleDiv.style.color = "gold"


function canvas(){
  var canvas1 = document.createElement('div');
  body.appendChild(canvas1);
  canvas1.className = 'canvas1'
  canvas1.style.height = '500px';
  canvas1.style.width = '900px';
  canvas1.style.float = 'left'
  // canvas1.style.marginTop = '100px'
  canvas1.style.marginLeft = '250px'
  canvas1.style.marginRight = '250px'


  for (var i = 0; i < 25; i++) {
    var row1 = document.createElement('div')
    canvas1.appendChild(row1);
    row1.className = 'row1'
    row1.style.lineHeight = '0';
    row1.style.lineSpacing = 'none';
    row1.style.display = 'inline-block'
    row1.style.float = 'left'
    row1.style.margin = 'auto'


    for (var j = 0; j < 40; j++) {
      var pixel1 = document.createElement('div');
      row1.appendChild(pixel1);
      pixel1.className = 'pixel1'
      pixel1.style.border = "1px dotted black"
      pixel1.style.height = '20px';
      pixel1.style.width = '20px';
      // pixel1.style.padding = '5px';
      pixel1.style.display = 'inline-block'
      pixel1.style.float = 'left'
      pixel1.style.boxSizing = 'borderBox';
      pixel1.style.borderCollapse = 'collapse';
      pixel1.style.margin = 'auto'
      // pixel1.style.backgroundColor = 'rgb(245, 225, 91)'


    }
  }
  return canvas1;
}
canvas();


var palette1 = document.createElement('div');
function palette(){
body.appendChild(palette1);
palette1.className = 'palette1'
palette1.style.border = '1px solid white';
// palette1.style.float = 'right';
palette1.style.height = '455px';
palette1.style.width = '50px'
palette1.style.marginLeft = '100px'
}
palette();

var greyPalette1 = document.createElement('div');
function greyPalette(){
body.appendChild(greyPalette1);
greyPalette1.className = 'greyPalette1'
greyPalette1.style.border = '1px solid white';
greyPalette1.style.float = 'right';
greyPalette1.style.height = '300px';
greyPalette1.style.width = '50px'
greyPalette1.style.marginRight = '125px'
greyPalette1.style.marginTop = '-450px'
}
greyPalette();

var resetPalette1 = document.createElement('div');
function resetPalette(){
body.appendChild(resetPalette1);
resetPalette1.className = 'resetPalette1'
resetPalette1.style.border = '1px solid white';
resetPalette1.style.float = 'right';
resetPalette1.style.height = '50px';
resetPalette1.style.width = '50px'
resetPalette1.style.marginRight = '125px'
resetPalette1.style.marginTop = '-95px'
}
resetPalette();

  function colors(x) {
  var color1 = document.createElement('div');
  palette1.appendChild(color1);
  color1.style.border = '1px solid black'
  color1.style.height = '20px';
  color1.style.width = '20px';
  color1.style.borderRadius = "30%"
  color1.style.margin = '10px'
  color1.className = 'color1 ';
  color1.style.backgroundColor = x;
  color1.style.marginLeft = "15px"
}

function greyColors(x) {
var greyColors1 = document.createElement('div');
greyPalette1.appendChild(greyColors1);
greyColors1.style.border = '1px solid black'
greyColors1.style.height = '20px';
greyColors1.style.width = '20px';
greyColors1.style.borderRadius = "30%"
greyColors1.style.margin = '10px'
greyColors1.className = 'greyColors1 ';
greyColors1.style.backgroundColor = x;
greyColors1.style.marginLeft = "15px"
}

function resetColors(x) {
var resetColors1 = document.createElement('div');
resetPalette1.appendChild(resetColors1);
resetColors1.style.border = '1px solid black'
resetColors1.style.height = '20px';
resetColors1.style.width = '20px';
resetColors1.style.borderRadius = "30%"
resetColors1.style.marginTop = '15px'
resetColors1.className = 'resetColors1 ';
resetColors1.style.backgroundColor = x;
resetColors1.style.marginLeft = "15px"
}

var resetArray = ['']

var greyArray = ['rgb(255, 255, 255)', 'rgb(226, 226, 226)','rgb(196, 196, 196)','rgb(158, 158, 159)','rgb(133, 133, 133)','rgb(93, 93, 93)','rgb(72, 73, 72)','rgb(40, 40, 41)','rgb(0, 0, 0)'];

var superCoolCoolers = ['rgb(196, 63, 158)','rgb(82, 213, 24)','rgb(157, 235, 192)', 'rgb(207, 237, 19)', 'rgb(13, 36, 187)', 'rgb(201, 100, 15)', 'rgb(168, 71, 1)', 'rgb(207, 11, 41)'];

var colorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

function createBase(arr){
  for (var i = 0; i < arr.length; i++) {
    colors(arr[i]);
  }
}
function createGrey(arr){
  for (var i = 0; i < arr.length; i++) {
    greyColors(arr[i]);
  }
}

function createReset(arr){
  for (var i = 0; i < arr.length; i++) {
    resetColors(arr[i]);
  }
}

createReset(resetArray)
createGrey(greyArray)
createBase(colorsArray)
createBase(superCoolCoolers)
// var colorName = event.target.className

function paletteLabel(text){
  var label = document.createElement('div');
  palette1.appendChild(label);
  label.style.float = 'left'
  label.innerText = text
  label.style.color = "white"
  label.fontStyle = 'bold'
label.style.border = '1px solid white'
label.style.height = "30px"
label.style.width = '125px'
label.style.borderRadius = "20px"
label.style.paddingTop = '10px';
label.style.paddingLeft = '20px';
label.style.marginLeft = "-45px"
}

paletteLabel('Pick your paint!')

var resetLabel1 = document.createElement('div');
function resetLabel(text){
  resetPalette1.appendChild(resetLabel1);
  resetLabel1.style.float = 'left'
  resetLabel1.innerText = text
  resetLabel1.style.color = "white"
  resetLabel1.fontStyle = 'bold'
resetLabel1.style.border = '1px solid white'
resetLabel1.style.height = "30px"
resetLabel1.style.width = '125px'
resetLabel1.style.borderRadius = "20px"
resetLabel1.style.paddingTop = '10px';
resetLabel1.style.paddingLeft = '35px';
resetLabel1.style.marginLeft = "-55px"
resetLabel1.style.marginTop = '60px'
}

resetLabel('Wash the wall')

var name = document.createElement('div')
body.appendChild(name);
name.className = "name"
name.style.height = "100px"
name.style.width = "1200px"
name.style.fontFamily = "'Permanent Marker', cursive"
name.innerText = "Created by Kevin Seagraves"
name.style.textAlign = 'center'
name.style.fontSize = '1em'
name.style.paddingTop = "30px"
name.style.paddingLeft = "100px"
name.style.marginTop = "100px"

name.style.color = "gold"


var getColor = function() {
    clicker.current = event.target.style.backgroundColor;
  console.log(clicker.current);
}

var applyColor = function() {
  if (event.target.className === 'pixel1') {
    event.target.style.backgroundColor = clicker.current;
    body.addEventListener('mouseover', applyColor);
    body.addEventListener('mouseup', function(){
    body.removeEventListener('mouseover', applyColor);
  })
  }
}

var reload = function() {
  window.location.reload(true);
}

palette1.addEventListener('click', getColor);
greyPalette1.addEventListener('click', getColor);
resetPalette1.addEventListener('click', getColor);

body.addEventListener('mousedown', applyColor);

resetLabel1.addEventListener('click', reload)


// 1. Fork and clone this repository.
// 1. Create a small, 2x2 grid canvas made up of white, square `div` tags with a border.
// 1. Add an event listener to each `div` so when clicked the background turns red.
// 1. Create a small palette of two colors (e.g. red and blue) below the canvas using more `div` tags.
// 1. Add an event listener to these `div` tags so when clicked the brush color is saved.
// 1. Expand the dimensions of the pixel canvas.
// 1. Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brow1n, gray, black, white, etc.)
// 1. Expand the palette with a brush color indicator.
// 1. Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!
//









})
