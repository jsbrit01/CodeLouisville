//Problem: Nav bar wraps menu items when window is shrunk to smaller sizes
//Solution: When smaller sizes are reached, nav bar should display items in
//          a way appropriate to small screen sizes

//Create a select box to replace the nav bar on mobile layout
var $menuDiv = $("#menu");
var $select = $("<select></select>");

// 1) Cycle over <a> & create select box options. Option text should be <a> text
//    "value" attribute should be "href"
$("#menu a").each(function(){
    var $anchor = $(this);
    // console.log($anchor);
    var $option = $("<option></option>");
    $option.val($anchor.attr("href"));
    $option.text($anchor.text());
    //console.log($anchor.parent().hasClass("selected"));
    $select.append($option);

    //Whichever item in select is chosen needs to have a "selected" attribute added to it
    if($anchor.parent().hasClass("selected")){
      //$select.val($anchor.text());
      $option.attr("selected", true);
    }
});

$menuDiv.append($select);

$select.on("change", function(){
  window.location = $select.val();
});
