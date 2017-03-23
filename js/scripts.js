$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#voter').show();
  }

  else if (age < 18) {
    $('#minor').show();
  }

  else {
    alert("Please enter age in numbers");
  }
});
