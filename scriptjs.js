let currentResult = "";

function appendNumber(number) {
  currentResult += number;
  document.getElementById("result").value = currentResult;
}

function appendOperator(operator) {
  currentResult += operator;
  document.getElementById("result").value = currentResult;
}

function calculate() {
  try {
    const result = eval(currentResult);
    document.getElementById("result").value = result;
    currentResult = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentResult = "";
  }
}

function clearResult() {
  currentResult = "";
  document.getElementById("result").value = currentResult;
}
