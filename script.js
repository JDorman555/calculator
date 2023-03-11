function operate(num1, operator, num2) {
  if (operator == '+') {
    return parseFloat(num1) + parseFloat(num2);
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
const histEqual = document.querySelector('.history-equals');
const btn = document.querySelectorAll('button');

let arr1 = [];
let arr2 = [];
let arr3 = [];

let op = '';
let result = '';
let i = 0;

btn.forEach((button) => {
  button.addEventListener('click', () => {
    // if clear button is clicked call clear function to reset everything to default value
    if (button.id == 'clear') {
      clear();
    }
    // else if button is "="
    else if (button.id == '=') {
      // check if "=" has been clicked before by checking if there was a previous result
      if (result != '') {
        result = operate(result, op, arr2.join(''))
        display.textContent = result;
        history.textContent += ` ${op} ${arr2.join('')}`;

        op = '';
        arr2 = [];
      }
      // else its first time running
      else {
        history.textContent = `${arr1.join('')} ${op} ${arr2.join('')}`;
        histEqual.textContent = button.id
        arr3 = [arr1.join(''), arr2.join('')];
        result = operate(arr3[0], op, arr3[1]);
        display.textContent = result;

        op = '';
        arr2 = [];
      }
      
    }

    // Start here, figure out how to chain operators, i have an idea in mind
    // whenever a operator is clicked, check if its first time clicked, if so
    // that shoud mean first num already entered and 2nd num is being entered currently
    // meaning if an operator is clicked again, it should calculate the first two numbers
    // at hand, store in result, reset arr2, and push the new numbers to arr2 then finally
    // if op is pressed again repeat or if equals is pressed then it will output.

    // else if button was a operator
    else if (button.id == '*' || button.id == '/' || button.id == '+' || button.id == '-') {

      // if op is not empty, it is 2nd operator being input so calculate first 2 numbers
      if (op != '') {
        arr3 = [arr1.join(''), arr2.join('')];
        result = operate(arr3[0], op, arr3[1]);
        histEqual.textContent = '=';
        history.textContent += ` ${op} ${arr2.join('')}`;
        display.textContent = result;

        arr2 = [];
        arr1 = [result];
      }

      op = button.id
      

    }
    // else check if operator was already declared
    else {
      // if operator was declared its 2nd... num being declared
      if (op == '*' || op == '/' || op == '+' || op == '-') {
        if (i == 1)
        {
          arr2.push(button.id);
          display.textContent = arr2.join('');
          //history.textContent += ` ${op} ${arr2.join('')}`;
        }
        else {
          arr2.push(button.id);
          history.textContent = `${arr1.join('')} ${op}`;
          display.textContent = arr2.join('');
          i++;
        }
        
      }
      // else operator wasnt declared and its first time running/ first num being declared
      else {
        arr1.push(button.id);
        display.textContent = arr1.join('');
      }

      
    }



  });
});

// reset every value to default
function clear() {
  arr1 = [];
  arr2 = [];
  arr3 = [];
  result = '';
  op = '';
  display.textContent = '';
  history.textContent = '';
  histEqual.textContent = '';
  i = 0;
}