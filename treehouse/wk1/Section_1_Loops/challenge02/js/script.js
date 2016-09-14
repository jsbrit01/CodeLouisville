var html = '';
var red;
var green;
var blue;
var rgbColor;
var colorRangeNum = 256;
var body = document.getElementById('color');

//Original code
/*
for(var i = 0; i < 100; i += 1){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += <div style="background-color:'" + rgbColor + "'></div>";
}

document.write(html);
*/

//Refactor above code to create divs with randomly generated colors
//so that no code is repeated
for (var i = 0; i < 10; i++) {
  var div = document.createElement('div');
  div.setAttribute('style', 'background-color:' + GenerateRGB(colorRangeNum));
  body.appendChild(div);
}

function GenerateRGB(colorRangeNum){
  var numArray = [];
  for(y = 0; y < 3; y++){
      numArray.push(GenerateRandNum(colorRangeNum));
  }
  rgbColor = 'rgb(' + numArray[0] + ',' + numArray[1] + ',' + numArray[2] + ')';
  return rgbColor;
}

function GenerateRandNum(aNum){
  return Math.floor(Math.random()*aNum);
}
