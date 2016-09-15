
// function print(message) {
//   document.write(message);
// }

//Create a quiz that implements a 2D array with at least 3 questions
//The quiz should keep track of the # of questions correct & incorrect and print the results to screen at the conclusion

//Question/Answer data
var quiz = [
  ["Who was the first President of the United States?", "George Washington"],
  ["What is the capital of Mongolia?", "Ulaanbaatar"],
  ["Who directed the movie 'Interstellar'?", "Christopher Nolan"],
  ["What South American country was a founding member of OPEC in 1960?", "Venezuela"]
];

//Array storing student's results
var result = [
  [], //stores index of correct answers
  [] //stores index of incorrect answers
];

//Begin quiz logic
var count = 0;
while(count < quiz.length){
    var userAnswer = prompt(quiz[count][0]);
    if(userAnswer === quiz[count][1]){
      result[0].push(count);
    } else {
      result[1].push(count);
    }
    count++;
} //End while

DisplayResults(result);
//End quiz logic

//Display function
function DisplayResults(resultArray){
  var html = "Here are the results:<br/>";

  for(var i = 0; i < resultArray.length; i++)
  {
    var questions = resultArray[i];
    if(i === 0){ //Meaning, if looking at the "correct" array
      html += "<br/>Here are the correct questions:<br/>";
      for(var j = 0; j < questions.length; j++){
        var questionIndex = questions[j];
        html += "Question: " + quiz[questionIndex][0] + " | Answer: " + quiz[questionIndex][1] + "<br/>";
      } //End for
    } else if(i === 1) { //Meaning, if looking at the "incorrect" array
      html += "<br/>Here are the incorrect questions:<br/>";
      for(var j = 0; j < questions.length; j++){
        var questionIndex = questions[j];
        html += "Question: " + quiz[questionIndex][0] + " | Answer: " + quiz[questionIndex][1] + "<br/>";
      } //End for
    } //End else if
  } //End for

  html += "<br/>You answered " + result[0].length + " out of " + quiz.length + " total questions correctly";

  document.getElementById("output").innerHTML = html;
} //End DisplayResults
