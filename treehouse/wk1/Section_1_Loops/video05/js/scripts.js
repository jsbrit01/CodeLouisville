//Create 10 div tags on a page. Implement with a for loop
(function(){
  var body = document.getElementById('color');
  var numDivs = 10;
  for(var i = 0; i < numDivs; i++){
    var div = document.createElement("div");
    div.innerHTML = i;
    body.appendChild(div);
  }
})();
