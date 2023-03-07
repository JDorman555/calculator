function operate(num1, operator, num2) {
  if (operator == '+') {
    console.log(add(num1, num2));
  }
  else if (operator == '-') {
    console.log(subtract(num1, num2));
  }
  else if (operator == '*') {
    console.log(multiply(num1, num2));
  }
  else if (operator == '/') {
    console.log(buttonide(num1, num2));
  }
  else {
    console.log('Not a valid operator');
  }
}

function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function buttonide(num1, num2) {
  console.log(num1 / num2);
}

const btn = document.querySelectorAll('button');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
  });
});