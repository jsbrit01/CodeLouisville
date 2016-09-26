'use strict';
/*
** Problems:
** 1) Pen does not draw on the canvas
** 2) Color selector underneath canvas will not allow new color to be selected
** 3) "New Color" button won't reveal color selector panel to add a new color
** 4) Color selector panel lacks functionality to add a new color to the palette
*/

//Plan
//variables
var $canvas = $("canvas"),
    $revealColorSelect = $("#revealColorSelect"),
    $addNewColor = $("#addNewColor"),
    $colorSliders = $(".sliders input[type='range']");

//Attach mouse event to the canvas to facilitate drawing
$canvas.on("mousedown", function(downEvent){
  $(this).on("mousemove", function(moveEvent){
    var context = this.getContext('2d');
    var penColor = $("#colorPalette li.selected").css("background-color");
    context.strokeStyle = penColor;
    context.beginPath();
    context.moveTo(downEvent.offsetX, downEvent.offsetY);
    context.lineTo(moveEvent.offsetX, moveEvent.offsetY);
    context.stroke();
    downEvent = moveEvent; //Allows setting of new coordinates to move from
  });
}).on("mouseleave", function(){
  $(this).off("mousemove"); //Prevents mouse from continuing to draw after leaving canvas element
});

$("body").on("mouseup", function(){
  $canvas.off("mousemove");
  $colorSliders.off("mousemove");
});
//Add/remove class "selected" from #colorPalette li when user clicks color
$("#colorPalette").on("click", "li", function(){ //Attach click to parent (so list elements can be dynamically added) & then filter bubbling up events to listen for "li" clicks
  var li = $(this);
  selectColor(li);
});
//Show/hide #colorSelect when #revealColorSelect button is pressed
$revealColorSelect.on("click", function(){
  $("#colorSelect").show();
  //Set #newColor's initial display color
  var $newColor = $("#newColor").css("background-color", createColor());
});
//Change background color of #newColor span when user clicks the color sliders
//Add color to #colorPalette when user clicks #addNewColor button
$addNewColor.on("click", function(){
  var newColor = $("#newColor").css("background-color");
  var $li = $("<li></li>");
  $li.css("background-color", newColor);
  $("#colorPalette").append($li);
  selectColor($li[0]);
});

$colorSliders.on("mousedown", function(){
  $(this).on("mousemove", function(){
    //Create an rgba color & update #newColor with the color
    $("#newColor").css("background-color", createColor());
  });
});




//Custom functions
function drawCanvas(aContext, color){
  console.log("Canvas function: ", color);

  aContext.strokeStyle = color;

  aContext.beginPath();
  aContext.stroke();

}

function selectColor(listElement){
  $("#colorPalette li.selected").removeClass("selected");
  $(listElement).addClass("selected");
}

function createColor(){
  var red, green, blue, alpha;
  //Get the value from 4 inputs (red, green, blue, alpha)
  red = $("#red").val();
  green = $("#green").val();
  blue = $("#blue").val();
  alpha = $("#alpha").val();

  return ("rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")");
}
