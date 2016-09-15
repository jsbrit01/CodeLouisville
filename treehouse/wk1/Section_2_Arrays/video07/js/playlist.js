//Modify playList array from 1D array to 2D
//The inner array should contain both the song name & artist name
//Display this new array to the screen

////Original 1D array
// var playList = [
//   'I Did It My Way',
//   'Respect',
//   'Imagine',
//   'Born to Run',
//   'Louie Louie',
//   'Maybellene'
// ];

//Modified 2D array
var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Arethra Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

// function print(message) {
//   document.write(message);
// }

function printList( songArray ) {
  // var listHTML = '<ol>';
  // for ( var i = 0; i < list.length; i += 1) {
  //   listHTML += '<li>' + list[i] + '</li>';
  // }
  // listHTML += '</ol>';
  // print(listHTML);

  var ol = document.createElement('ol');

  for(var i = 0; i < songArray.length; i++){
    var song = songArray[i];
    var li = document.createElement('li');
    li.innerHTML = song[0] + " | by " + song[1];
    ol.appendChild(li);
  } //End loop

  //Append to #listDiv
  document.getElementById('listDiv').appendChild(ol);

} //End printList

printList(playList);
