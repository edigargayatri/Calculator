let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(val) {
  if (displayValue === '0' && val !== '.') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

updateDisplay();
