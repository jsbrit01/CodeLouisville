//Problem: Solution doesn't provide any interactivity
//Solution: Add desired interactivity which includes:
/*
1) Add button adds an item to the To Do list
2) Clicking "Edit" enables edit. Clicking again disables edit ability
3) Clicking "Delete" removes item from the list (whether the item is the the "To Do" or the "Completed" list)
4) Clicking the checkbox in the To Do portion will move a list item to the "Completed" section
5) Clicking the checkbox in the Completed portion will move a list item back to the "To Do" section
*/

//Variables
//*********

var taskInput = document.getElementById("new-task"); //value of #new-task textbox
var addBtn = document.getElementsByTagName("button")[0]; //<button> element which adds a new task
var incompleteTasks = document.getElementById("incomplete-tasks"); //ul#incomplete-tasks
var completeTasks = document.getElementById("complete-tasks"); //ul#complete-tasks
//var editBtn = document.getElementsByClassName("edit");
//var deleteBtn = document.getElementsByClassName("delete");


//Methods
//*******

function CreateNewListItem(aNewTaskString){
  
  var listItem = document.createElement("li");
  
  //Create a list item element containing these elements: 
      //A checkbox
      var checkBox = document.createElement("input");
//      checkBox.setAttribute('type', 'checkbox');
  
      //A label (w/ value from #new-task)
      var label = document.createElement("label");
//      label.value = aNewTaskString;
//      label.innerHTML = aNewTaskString;
  
      //A textbox (w/o a value)
      var textBox = document.createElement("input");
//      textBox.setAttribute("type", "text");
  
      //An edit button (w/ class 'edit')
      var editButton = document.createElement("button");
//      editButton.classList.add('edit');
//      editButton.innerHTML = "Edit";
  
      //A delete button (w/ class 'delete')
      var deleteButton = document.createElement("button");
//      deleteButton.classList.add('delete');
//      deleteButton.innerHTML = "Delete";
  
  //Modify created element's attributes
  checkBox.type = "checkbox";
  textBox.type = "text";
  
  label.innerHTML = aNewTaskString;
  editButton.innerHTML = "Edit";
  deleteButton.innerHTML = "Delete";
  
  editButton.classList.add("edit");
  deleteButton.classList.add("delete");
  
  
  
  //Assemble the list item by attaching child elements
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(textBox);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
  
}


//1) Add button adds an item to the #incomplete-tasks list
function AddTask(){
  //console.log("Add task");
  
  
  //Take value from #new-task and create new task
  var listItem = CreateNewListItem(taskInput.value);;
  
  incompleteTasks.appendChild(listItem);
  
  //Add events to list item's elements
  AttachEvents(listItem);
  
  //Clear textbox value
  taskInput.value = null;  
  
}



//2) Edit button allows for item to be modified (edit becomes enabled). Clicking "Edit" again disables edit
function EditTask(){
  //console.log("Edit task");
  
  //If button element parent (the li element) has class "editMode", then:
         //Remove .editMode from parent li element
         //Clear textbox's value
      //Else
         //Add .editMode to li element
         //Make textbox's value = label's text
  
  var listItem = this.parentNode;
  
  var label = listItem.querySelector("label");
  var textBox = listItem.querySelector("input[type='text']");
  var editButton = listItem.querySelector("button.edit");
  
  if(listItem.classList.contains("editMode")){
    editButton.innerText = "Edit";
    textBox.innerText = null;
  }
  else{
    editButton.innerText = "Save";
    textBox.innerText = label.innerText;
  }
  
  listItem.classList.toggle("editMode");
  
}


//3) Clicking "Delete" removes item from the list (whether it's in ul#incomplete-tasks or ul#complete-tasks)
//DeleteTask() is attached to the Delete button, thus a "this" reference passes the Delete <button> element nested inside an <li> element
function DeleteTask(){
  console.log("Delete task");
  
  var listItem = this.parentNode; //Get <li> parent element 
  var listGroup = listItem.parentNode; //Get the <ul> element
  
  //Remove button's parent element (the li element) from it's ul element
  listGroup.removeChild(listItem);
  
}



//4) Clicking the checkbox in #incomplete-tasks moves li to #complete-tasks
//5) Clicking the checkbox in #complete-tasks will move list item back to #incomplete-tasks
function MoveTask(){
  //console.log("Move task");
    //Add checkbox's parent element (the li element) to ul#complete-tasks
    //Remove li element from #incomplete-tasks
  
    //Add parent li element to #incomplete-tasks
    //Remove li element from #complete-tasks
  
  var listItem = this.parentNode;
  var listID = listItem.parentNode.id;
  
  if(listID === "incomplete-tasks"){
    completeTasks.appendChild(listItem);
  }
  else{
    incompleteTasks.appendChild(listItem);
  }
} //End MoveTask()

//Attach event handlers to checkboxes, and edit & delete buttons
function AttachEvents(aListItem)
{
  aListItem.querySelector("input[type='checkbox']").addEventListener("click", MoveTask);
  aListItem.querySelector("button.edit").addEventListener("click", EditTask);
  aListItem.querySelector("button.delete").addEventListener("click", DeleteTask);
  
  /*
  for(var x = 0; x < aListItem.children.length; x++)
  {
    var tagName = aListItem.children[x].tagName;
        
    switch(tagName){
        case "INPUT":
          if(aListItem.children[x].type == 'checkbox')
          {
            aListItem.children[x].addEventListener('click', MoveTask);
          }
          break;
        case "BUTTON":
          var aBtn = aListItem.children[x]  
          for(var y = 0; y < aBtn.classList.length; y++)
          {
            switch(aBtn.classList[y])
            {
              case "edit":
                aBtn.addEventListener('click', EditTask);
                break;
              case "delete":
                aBtn.addEventListener('click', DeleteTask);
                break;
              default:
                break;
            }
          }
          break;
        default:
          break;
    } 
  }
  
  */
  
  //Attached EditTask method to button.edit
  //Attach DeleteTask method to button.delete
  //Attach MoveTask method to input[type=checkbox]
}


//*********************
//Assign event handlers
//*********************
addBtn.addEventListener('click', AddTask);


//Iterate through each li element in incompleteTasks and completeTasks variables
for(var x = 0; x < 2; x++){
  var ulArray = [incompleteTasks, completeTasks];
  var currentList = ulArray[x];
  
  for(var y = 0; y < currentList.children.length; y++)
  {
    AttachEvents(currentList.children[y]); //Attach event handlers to elements in each li child element
  }
}
 





