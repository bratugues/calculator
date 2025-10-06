const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

let num1;
let num2;
let operator;

const operate = (num1, operator, num2) => {
  if(operator === "+"){
    add(num1, num2);
  } else if(operator === "-"){
    subtract (num1, num2);
  } else if (operator === "*"){
    multiply(num1, num2);
  } else if (operator === "/"){
    divide(num1, num2);
  }
}
