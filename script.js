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

const display = document.querySelector('.display');
const history = document.querySelector('.history');
const btn = document.querySelectorAll('button');

let arr1 = [];

let op = 'null';

btn.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'clear') {
      clear();
    }
    else {
      arr1.push(button.id);
      display.textContent = arr1.join('');
    }
    
    
    



    /*
    if (op == "multiply") {
      history.textContent += `${display.textContent} ${op}`;
      display.textContent = '';
      op = 'null';
    }
    else if (button.id == "multiply") {
      op = button.id;
    }
    else {
      display.textContent += `${button.id}`;
    }
    */
    
  });
});

function clear() {
  arr1 = [];
  display.textContent = '';
  history.textContent = '';
}