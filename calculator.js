let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("result").value = "";
  document.getElementById("message").textContent = "";
}

function updateDisplay() {
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    let total = eval(currentInput);
    // Check if the total equals 143 and replace with "I love you CINDY!"
    if (total === 143) {
      document.getElementById("result").value = "I love you CINDY!";
      document.getElementById("result").style.fontSize = "1.5em"; // Adjust font size for the message
    } else {
      document.getElementById("result").value = total;
      document.getElementById("result").style.fontSize = "2.5em"; // Reset font size for numbers
    }
    document.getElementById("message").textContent = ""; // Clear message after calculation
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
