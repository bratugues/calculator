const buttons = document.querySelectorAll("button")

let displayValue = "";
let num1 = "";
let num2 = "";
let operator = null;
let justCalculated = false;

const updateDisplay = () => {
  if (displayValue === ""){
    document.getElementById("display").innerHTML = "0";
  } else {
    document.getElementById("display").innerHTML = displayValue;
  }
}

const appendOperator = (op) => {
  if (operator !== null && num2 !== "") {
    operate();
  }

  if (operator !== null && num2 === ""){
    operator = op;
    displayValue = num1 + op
    updateDisplay();
  } else if (
    displayValue !== "" &&
    !isNaN(displayValue.charAt(displayValue.length - 1))
  ) {
    displayValue += op;
    operator = op
    updateDisplay()
  }
}
const appendNumber = (number) => {
  displayValue += number
  if (operator === null){
    num1 = displayValue;
  }
  if (operator !== null){
    let splitted = displayValue.split(`${operator}`);
    num2 = splitted[1];
  }
  updateDisplay()
}

updateDisplay()

const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
}

const subtract = (a, b) => {
  return parseFloat(a) - parseFloat(b);
}

const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
}

const divide = (a, b) => {
  return parseFloat(a) / parseFloat(b);
}


const operate = () => {
  if(operator === "+"){
    let result = add(num1, num2);
    displayValue = String(result);
    updateDisplay()
    num1 = String(result);
    num2 = "";
    operator = null;
  } else if(operator === "-"){
    let result = subtract(num1, num2);
    displayValue = String(result);
    updateDisplay()
    num1 = String(result);
    num2 = "";
    operator = null;
  } else if (operator === "*"){
    let result = multiply(num1, num2);
    displayValue = String(result);
    updateDisplay()
    num1 = String(result);
    num2 = "";
    operator = null;
  } else if (operator === "/"){
    let result = divide(num1, num2);
    displayValue = String(result);
    updateDisplay()
    num1 = String(result);
    num2 = "";
    operator = null;
  }
}

const clear = () => {
  num1 = "";
  num2 = "";
  operator = null;
  justCalculated = false;
  displayValue = "";
  updateDisplay();
}


buttons.forEach((button)=>{
  button.addEventListener("click", ()=>{
    if (button.classList.contains("clear")) {clear()};
    if (button.classList.contains("operator")) {appendOperator(button.innerHTML)};
    if (button.classList.contains("number")) {appendNumber(button.innerHTML)};
    if (button.classList.contains("equal")) operate();
  });
})
