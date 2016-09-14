
//Generate random numbers until the computer correctly guesses the random numbers
//When correctly guessed, print number of guesses it required
var randNum1 = randomNumber(10000), randNum2, count = 0;
while ( randNum1 !== randNum2 ) {
  randNum2 = randomNumber(10000);
  count++;
}
document.write("<p>Correct guess was: " + randNum1 + "</p>");
document.write("<p>It took the computer " + count + " guesses before the correct guess</p>");
