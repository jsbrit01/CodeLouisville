var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

//Build a loop which creates an ordered list from the playlist array
print(BuildList(playList));

function BuildList(anArray){
  //create list object
  var ol = document.createElement("ol");
  //loop through array
  for(var i = 0; i < anArray.length; i++){
    //create list item with song as inner html
    var li = document.createElement("li");
    li.innerHTML = anArray[i];
    //Append list item to list
    ol.appendChild(li);
  }
  //Return list object
  return ol;
}

function print(orderedList) {
  document.getElementById('playlist').appendChild(orderedList);
}
