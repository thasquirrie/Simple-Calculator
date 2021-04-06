const start = {
  valueToDisplay: '0',
  firstNumber: undefined,
  secondNumber: '0',
  operator: undefined,
  waitForSecondNumber: false
};



let buttons = document.querySelectorAll('.key-number');
let resultDisplay = document.querySelector('#result');
console.log(resultDisplay);

buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    button(item.id.split('-')[1]);
  });
});

const button = (type) => {
  if (type === 'add') {
    // console.log('operator:', '+');
    operatorHandler('+');
    showDisplay();
    console.log(start);
    return;
  }

  if (type === 'min') {
    // console.log('operator:', '-');
    operatorHandler('-');
    showDisplay();
    console.log(start);
    return;
  }

  if (type === 'div') {
    // console.log('operator:', '÷');
    operatorHandler('÷');
    showDisplay();
    console.log(start);
    return;
  }
  if (type === 'mul') {
    // console.log('operator:', '×');
    operatorHandler('×');
    showDisplay();
    console.log(start);
    return;
  }
  if (type === 'equal') {
    operatorHandler('=');
    showDisplay();
    console.log(start);
    return;
  }
  if (type === 'dot') {
    addDot('.');
    showDisplay();
    return;
  }
  if (type === 'ac') {
    // console.log('operator:', 'all-clear');
    allClearHandler();
    showDisplay();
    console.log(start);
    return;
  }
  if (type === 'sign') {
    // console.log('operator:', '+/-');
    signHandler(start.valueToDisplay);
    showDisplay();
    console.log(start);
    return;
  }

  if (type === 'mod') {
    console.log('operator', '%');
    return;
  }
  // console.log(type);
  // console.log(inputDigit(type));
  inputDigit(type);
  showDisplay();
  // console.log(start);
};

const inputDigit = (digit) => {
  let { valueToDisplay, waitForSecondNumber } = start;

  if (waitForSecondNumber === true) {
    start.secondNumber = start.secondNumber === '0' ? digit : start.secondNumber + digit;
  }
  start.valueToDisplay = valueToDisplay === '0' ? digit : valueToDisplay + digit;
  // console.log(digit);
  // console.log(valueToDisplay);
  return start.valueToDisplay;
};

const addDot = (dot) => {
  const { valueToDisplay } = start;
  if (!valueToDisplay.includes(dot)) {
    start.valueToDisplay += dot;
  }
};

const operatorHandler = (operators) => {
  const { valueToDisplay, firstNumber, secondNumber, operator } = start;
  // if (operator && operators !== '=' && start.waitForSecondNumber) {
  //   start.operator = operators;
  //   start.valueToDisplay = start.valueToDisplay.replace(start.valueToDisplay.charAt(start.valueToDisplay.length - 2), operators);
  //   console.log(start.valueToDisplay);
  //   return;
  // }


  if (firstNumber === undefined) {
    start.firstNumber = parseFloat(valueToDisplay);
  } else if (operator && secondNumber) {
    let result = evaluate(parseFloat(firstNumber), parseFloat(secondNumber), operator);

    start.firstNumber = result;
    start.secondNumber = '0';
    resultDisplay.style.display = 'block';
    document.querySelector('#equal-value').innerHTML = parseFloat(result.toFixed(4));
  }
  if (operators !== '=') {
    start.operator = operators;
    start.valueToDisplay += ` ${start.operator} `;
  } else {
    start.operator = '';
  }
  console.log('New:', start);
  start.waitForSecondNumber = true;
};

const allClearHandler = () => {
  start.valueToDisplay = '0';
  start.firstNumber = undefined;
  start.waitForSecondNumber = false;
  start.secondNumber = '0';
  resultDisplay.style.display = 'none';
};

const signHandler = () => {
  if (start.valueToDisplay.length - 1 >= 1) {
    console.log(start.valueToDisplay.length - 1);
    start.valueToDisplay = start.valueToDisplay.slice(0, start.valueToDisplay.length - 2);
    return;
  }
  start.valueToDisplay = '0';
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    return 'Infinity!';
  }
  return a / b;
};

const evaluate = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return add(firstNumber, secondNumber);
  } else if (operator === '-') {
    return subtract(firstNumber, secondNumber);
  } else if (operator === '×') {
    return multiply(firstNumber, secondNumber);
  } else if (operator === '÷') {
    return divide(firstNumber, secondNumber);
  } else if (operator === '=') {
    return firstNumber;
  }


};


const showDisplay = () => {
  document.querySelector('#formula').innerHTML = start.valueToDisplay;
  // console.log(document.querySelector('#formula').innerHTML);
};

showDisplay();