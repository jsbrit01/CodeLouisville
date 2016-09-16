var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS'],
  pet : {
    name: "Smokey",
    type: "bear"
  }
};

//Use a for...in loop to iterate through the person object's properties
//Print results out to the console
function DisplayObject(anObj){
  var count = 0;
  for(var key in anObj){
    if(Array.isArray(anObj[key])){
      console.log(key, ":", anObj[key].join(", "));
    } else if(typeof anObj[key] === 'object'){
      console.log(key, " (sub-object): ")
      DisplayObject(anObj[key]);
      console.log("\n");
    } else {
      console.log(key, ": ", anObj[key]);
    }
    count++;
  }
  console.log("The object has ", count, " total properties");
}

DisplayObject(person);
