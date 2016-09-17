//===============
//Challenge 03 tasks:
//Enable user to search for student (& display his/her record) using the "prompt" dialogue box
//The prompt dialogue should exit when the user types "quit"
//If student not found, display message to user such as "not found"
//If multiple students have the same name, display all matching records
/*
Note: I ran into problems with search results displaying in Chrome.
After searching online, the best I could figure is that browsers process
scripts differently. For example, Firefox displays the search results in the
index.html file without any problem, whereas Chrome seems to require the while
loop to exit before displaying results.
Sources:
https://teamtreehouse.com/community/view-not-updated-in-realtime
http://stackoverflow.com/a/29209282
http://stackoverflow.com/a/19058953

*/
//===============
//Obtain user request
var userSearch = "";

// while(userSearch !== "quit"){
while(true){
  if(userSearch === "quit"){
    break;
  }
  var msg = "";
  var studentIndexes = [-1];
  //var userSearch = "";
  //Get user request
  userSearch = prompt("Enter student name");
  //Search
  studentIndexes = StudentSearch(userSearch, students)
  //If search != -1, display student, else return not found
  if(studentIndexes[0] === -1){
    msg = "Student not found";
    print(msg);
  } else{
    msg = DisplayStudent(studentIndexes);
    print(msg);
    //break;
  }
}//End of while()


//Search. Returns index of student or -1 if not found
function StudentSearch(studentName, studentArray){
  var indexes = [];
  for(var i = 0; i < studentArray.length; i++){
    if(studentArray[i].name === studentName){
      indexes.push(i);
    }
  }
  return indexes;
}

//Display student (mostly copied from above commented out code)
function DisplayStudent(indexes){
  var msg = "";
  for(var i = 0; i < indexes.length; i++){
    var index = indexes[i];
    msg += '<h2>Student: ' + students[index].name + '</h2>';
    msg += '<p>Track: ' + students[index].track + '</p>';
    msg += '<p>Points: ' + students[index].points + '</p>';
    msg += '<p>Achievements: ' + students[index].achievements + '</p>';
  }
  return msg;
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
//
// for (var i = 0; i < students.length; i += 1) {
//   student = students[i];
//   message += '<h2>Student: ' + student.name + '</h2>';
//   message += '<p>Track: ' + student.track + '</p>';
//   message += '<p>Points: ' + student.points + '</p>';
//   message += '<p>Achievements: ' + student.achievements + '</p>';
// }
