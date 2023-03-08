function operate(num1, operator, num2) {
  if (operator == '+') {
    return num1 + num2;
  }
  else if (operator == '-') {
    return num1 - num2;
  }
  else if (operator == '*') {
    return num1 * num2;
  }
  else if (operator == '/') {
    return num1 / num2;
  }
  else {
    console.log('Not a valid operator');
  }
}

const display = document.querySelector('.display');
const history = document.querySelector('.history');
const btn = document.querySelectorAll('button');

let arr1 = [];
let arr2 = [];
let arr3 = [];

let op = 'null';
let result = '';

btn.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'clear') {
      clear();
    }
    else if (button.id == '=') {
      history.textContent = `${arr1.join('')} ${op} ${arr2.join('')} ${button.id}`;
      arr3 = [arr1.join(''), arr2.join('')];
      display.textContent = operate(arr3[0], op, arr3[1]);
    }
    else if (button.id == '*') {
      op = button.id
    }
    else {
      if (op === '*') {
        console.log(op);
        arr2.push(button.id);
        history.textContent = `${arr1.join('')} ${op}`;
        display.textContent = arr2.join('');
      }
      else {
        arr1.push(button.id);
        display.textContent = arr1.join('');
      }

      
    }


    
  });
});

function clear() {
  arr1 = [];
  arr2 = [];
  op = '';
  display.textContent = '';
  history.textContent = '';
}