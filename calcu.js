function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
// Enable keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];

  if (allowedKeys.includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
