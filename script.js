// Get references to the HTML elements
const name1Input = document.getElementById('name1');
const name2Input = document.getElementById('name2');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Calculate love percentage
function calculateLove() {
  const name1 = name1Input.value.trim().toLowerCase();
  const name2 = name2Input.value.trim().toLowerCase();

  // Calculate a random percentage
  const lovePercentage = Math.floor(Math.random() * 101);

  // Display the result
  resultDiv.textContent = `The love between ${name1} and ${name2} is ${lovePercentage}%!`;
}

// Attach the calculateLove function to the button click event
calculateBtn.addEventListener('click', calculateLove);
