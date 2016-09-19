//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//Add overlay
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img src='' alt=''>");
var $caption = $("<p></p>");

$overlay.append($image).append($caption);
$("body").append($overlay); //Append to body b/c the overlay needs to cover the entire screen

//1) User clicks on an image
$("#imageGallery a").on("click", function(event){
  event.preventDefault();
  var imgLocation = $(this).attr("href");
  var captionText = $(this).children("img").attr("alt");

  //Update overlay with the clicked image
  //Add image
  var attributes = {src: imgLocation, alt: captionText};
  $image.attr(attributes);
  //List the "alt" attribute of the click image as the lightbox's caption
  $caption.html(captionText);

  //Show the overlay
  $overlay.show();
}); //End $("#imageGallery").on(click)

//3) When overlay is clicked, hide overlay
$overlay.on("click", function(){
  $(this).hide();
});
