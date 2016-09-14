//Generate 10 random numbers
//Wrap variables & function in an anonymous function to avoid crowding global namespace
(function(){
  var counter = 0;
  var randNum;
  while(counter < 10){
    randNum = randomNumber(5);
    document.write("Number " + (counter + 1) + " is: " + randNum);
    counter++;
  }
  
  function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
})(); //
