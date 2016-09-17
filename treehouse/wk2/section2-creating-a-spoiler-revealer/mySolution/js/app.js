/*
** Define problem:
** Need to hide the spoiler so it isn't revealed until someone clicks on it
*/
// Plan Solution:
// 1) Hide spoiler by default
var $spoilerSpan = $(".spoiler > span").hide();
// 2) Add button
var $button = $("<button></button>").text("Reveal Spoilers");
$spoilerSpan.after($button);
// 3) When button clicked:
$("button").on("click", function(){
  // 3.1) Reveal spoiler
  $(this).prev().show();
  // 3.2) Hide button
  $(this).hide();
});
