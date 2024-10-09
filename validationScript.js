//Retrieve the form and input field
let inputField = document.getElementById('inputField');
let myForm = document.getElementById('myForm');

// JavaScript code for form validation
myForm.addEventListener('submit', validation); //run validation function on submit

function validation(event) {
  // Retrieve the input field value
  let inputValue = inputField.value;

  // Regular expression pattern for alphanumeric input
  let pattern = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (!pattern.test(inputValue)) {
    // Invalid input: display error message
    window.alert("The input value is NOT alphanumeric.");
    // Prevent form from submitting
    event.preventDefault();
    // Valid input: display confirmation and submit the form
  } else {
    window.alert("Confirmation: The input value IS alphanumeric!");
    myForm.submit();
  }
}








