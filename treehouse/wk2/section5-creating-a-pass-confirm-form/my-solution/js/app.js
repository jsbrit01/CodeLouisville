//Problem: Hints in <span> elements are visible at all times
//Solution: Hints need to be shown/hidden based on user input
'use strict';

//Plan:
//Show/hide span based on user input
var $password = $("#password");
var $confirm_pass = $("#confirm_password");
var $submit = $("input[type='submit']");

//Disable submit button until #password & #confirm_password conditions are met
$submit.prop('disabled', true);
//Show Password field if this.length <= 9 (pass must be > 8 characters)
$password.focus(passCheckEvent).keyup(passCheckEvent).keyup(confirmPassEvent).keyup(validateSubmitButton);
//Show Confirm password field if this.value !== password.value
$confirm_pass.focus(confirmPassEvent).keyup(confirmPassEvent).keyup(validateSubmitButton);

//Event Handlers
function passCheckEvent(){
  var $tip = $password.next();
  if($password.val().length > 8){
    $tip.hide();
    return true;
  } else{
    $tip.show();
    return false;
  }
} //End passCheckEvent()

function confirmPassEvent(){
  var $tip = $confirm_pass.next();
  if($confirm_pass.val() !== $password.val()){
    $tip.show();
    return false;
  } else{
    $tip.hide();
    return true;
  }
} //End confirmPassEvent()

function validateSubmitButton(){
  if(confirmPassEvent() && passCheckEvent()){
    $submit.attr("disabled", false);
  } else{
    $submit.attr("disabled", true);
  }
}

$submit.on('click', function(){
  alert("Dead!");
})
