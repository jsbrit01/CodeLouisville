var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var userNum;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

//Create program which asks user for a number which the computer
//tries to guess.
//Implement with a do...while loop
userNum = parseInt(prompt("Enter a number between 1 & 10"));
do{
  guess = getRandomNumber(userNum);
  guessCount++;
}while(guess !== userNum);

document.write("<p>User's number: " + userNum + "</p>");
document.write("<p>Computer required " + guessCount + " guesses before correctly selecting the user's number</p>");
