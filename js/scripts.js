$(document).ready(function() {
  // Set variable to ask user age and take number value
  var age = parseInt(prompt("How old are you?"));

  // Set conditional statement for voter age
  if (age >= 18) {
    $('#voter').show();
  }

  else if (age < 18) {
    $('#minor').show();
  }

 // If something other than a number is entered, set alert to request a valid answer
  else {
    alert("Please enter age in numbers");
  }
});
