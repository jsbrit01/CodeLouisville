var outputDiv = document.getElementById("output");

BuildTable(students);

//Get keys in an array of objets
function ObjectKeys(anArray){
  var keys = [];
  //Loop through all objects in arrayOfObjects
  for(var i = 0; i < anArray.length; i++){
    var obj = anArray[i];
    //Loop through each object's keys
    for(var key in obj){
      //if key not in keys[], add to keys[]
      if(keys.indexOf(key) === -1){
        keys.push(key);
      }//End if
    }//End for...in
  }//End for
  return keys;
}//End ObjectKeys

function BuildTable(students){
//row 1 - student names
//row 2 - track
//row 3 - achievements
//row 4 - points

//Outside loop is object keys
//Inside loop is the individual student objects
  var table = document.createElement("table");
  var keys = ObjectKeys(students);
  for(i = 0; i < keys.length; i++){
    var tr = document.createElement('tr');
    for(var j = 0; j < students.length; j++){
      var student = students[j];
        switch(keys[i]){
          case 'name':
            var th = document.createElement('th');
            th.innerHTML = student[keys[i]];
            tr.appendChild(th);
            break;
          case 'track':
          case 'achievements':
          case 'points':
            var td = document.createElement('td');
            td.innerHTML = student[keys[i]];
            tr.appendChild(td);
            break;
        }//End switch
    }//End for j
    table.appendChild(tr);
  }//End for i
  outputDiv.appendChild(table);
}//End BuildTable
