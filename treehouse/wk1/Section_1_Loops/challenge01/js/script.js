var html = '';
var red;
var green;
var blue;
var rgbColor;
var numColors = 256;
var body = document.getElementById('color');

//Refactor code to write 10 colored divs to screen
//Original chunk of code (which was listed 10x):
/*
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';

  //This line followed the above after it was repeated 10x:
  document.write(html);
*/


for(var i = 0; i < 10; i++){
  //Create color for <div>
  red = Math.floor(Math.random() * numColors );
  green = Math.floor(Math.random() * numColors );
  blue = Math.floor(Math.random() * numColors );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  //Create <div> & append to <body>
  var div = document.createElement('div');
  div.setAttribute('style', "background-color:" + rgbColor);
  body.appendChild(div);
}
