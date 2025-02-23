function addNumbers(a, b) {
    return a + b;
  }

  // Function to prompt user for input and display the result
  function getUserInput() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers!");
    } else {
      let sum = addNumbers(num1, num2);
      alert("The sum is: " + sum);
    }
}