var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

//Create function which allows user to search items in "inStock" array
function ItemSearch(aString, anArray){
  var index = anArray.indexOf(aString);
  console.log(index);
  var msg = "";
  if(index === -1){
    msg = "Item not in stock.";
  } else {
    msg = "Item available!";
  }
  return msg;
}

//Create function to display all values in "inStock"
function DisplayStock(anArray){
  return anArray.join(", ");
}

//Display controls
var searchBtn = document.getElementById("searchBtn");
var searchRdo = document.getElementById("searchRdo");
var displayRdo = document.getElementById("displayRdo");
var searchTxt = document.getElementById("searchBar");
var searchResult = document.getElementById("searchResult");
var searchLbl = document.getElementById("searchLbl");

searchBtn.addEventListener("click", function(){
  var msg = ItemSearch(searchTxt.value, inStock);
  searchResult.innerHTML = msg;
});

searchRdo.addEventListener("click", function(){
  //Display search bar & search button
  searchTxt.style.display = "inline";
  searchBtn.style.display = "inline";
  searchLbl.style.display = "inline";

  //Clear result area
  searchResult.innerHTML = "";
});

displayRdo.addEventListener("click", function(){
  //Hide search bar & search button
  searchTxt.style.display = "none";
  searchBtn.style.display = "none";
  searchLbl.style.display = "none";

  //Display all items in stock
  var inStockItems = DisplayStock(inStock);
  searchResult.innerHTML = inStockItems;
});
