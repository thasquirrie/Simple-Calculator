const start = {
  valueToDisplay: 0,
  firstNumber: null,
  operator: null,
  waitForSecondNumber: false
};

let buttons = document.querySelectorAll('.key-number');

buttons.forEach(function (item) {
  // console.log(item.id);
  // console.log(item.id.split('-')[1]);
  // console.log(item.id.replace("button-", ""));
  item.addEventListener("click", function () {
    // button(item.id.replace("button-", ""));
    // console.log(button(item.id.split('-')[1]));
    button(item.id.split('-')[1]);
  });
});

let button = (value) => {
  s;
};;


// var result = document.querySelector("#result");
// var resultValue = document.querySelector("#equal-value");
// var buttons = document.querySelectorAll(".key-number");
// buttons.forEach(function (item) {
//   // console.log(item);
//   // console.log(item.id.replace("button-", ""));
//   item.addEventListener("click", function () {
//     button(item.id.replace("button-", ""));
//   });
// });
// var state = {
//   value1: undefined,
//   value2: undefined,
//   operator: undefined,
// };
// function toString(_state) {
//   var op = undefined;
//   if (_state.operator === 'div') {
//     op = "/";
//   }
//   else if (_state.operator === 'mul') {
//     op = "*";
//   }
//   else if (_state.operator === 'min') {
//     op = "-";
//   }
//   else if (_state.operator === 'add') {
//     op = "+";
//   }
//   else if (_state.operator === 'mod') {
//     op = "%";
//   }
//   if (op === undefined && _state.value1 !== undefined) {
//     return _state.value1;
//   }
//   else if (_state.value1 !== undefined && _state.value2 === undefined) {
//     return state.value1;
//   }
//   else if (_state.value1 === undefined && _state.value2 === undefined) {
//     return 0;
//   }
//   else {
//     return _state.value1 + " " + op + " " + _state.value2;
//   }
//   return "";
// }
// function show(_state) {
//   formula.innerHTML = toString(_state);
//   if (_state.value2 !== undefined) {
//     _state.value1 = calc(_state);
//     _state.value2 = undefined;
//   }
//   if (_state.value1 === undefined) {
//     resultValue.innerHTML = 0;
//     // formula.innerHTML=""; // this have a small problem with layout inline!
//     formula.innerHTML = "&nbsp;";
//   }
//   else {
//     resultValue.innerHTML = _state.value1;
//   }
// }
// function calc(_state) {
//   let result = 0;
//   if (_state.value1 === undefined || _state.value2 === undefined) {
//     return result;
//   }
//   if (_state.operator === undefined) {
//     return _state.value1;
//   }
//   if (_state.operator === 'div') {
//     if (parseFloat(_state.value2) == 0) {
//       result = 0;
//     }
//     else {
//       result = parseFloat(_state.value1) / parseFloat(_state.value2);
//     }
//   }
//   else if (_state.operator === 'mul') {
//     result = parseFloat(_state.value1) * parseFloat(_state.value2);
//   }
//   else if (_state.operator === 'min') {
//     result = parseFloat(_state.value1) - parseFloat(_state.value2);
//   }
//   else if (_state.operator === 'add') {
//     result = parseFloat(_state.value1) + parseFloat(_state.value2);
//   }
//   else if (_state.operator === 'mod') {
//     result = parseFloat(_state.value1) % parseFloat(_state.value2);
//   }
//   return result;
//   // if(result !== undefined) {
//   // 	return result;
//   // }
//   // return undefined;
//   // return state;
// }
// // function button(type) {
// let button = (type) => {
//   console.log(type);
//   if ((type >= '0' && type <= '9') || type === '.' || type === '00') {
//     if (type === 'dot') {
//       type = '.';
//     }
//     if (state.operator === undefined) {
//       if (state.value1 === undefined) {
//         state.value1 = "";
//       }
//       state.value1 += type;
//     }
//     else {
//       if (state.value2 === undefined) {
//         state.value2 = "";
//       }
//       console.log('Type:', type);
//       state.value2 += type;
//       result.style.display = "block";
//       formula.innerHTML = toString(state);
//       // show(state);
//       resultValue.innerHTML = calc(state);
//     }
//   }
//   else if (type === 'div' || type === 'mul' || type === 'min' || type === 'add' || type === 'mod') {
//     if (state.value1 !== undefined && state.value2 !== undefined) {
//       state.value1 = calc(state);
//       state.value2 = undefined;
//     }
//     show(state);
//     state.operator = type;
//   }
//   else if (type === 'sign') {
//     if (state.value1 !== undefined && state.value2 === undefined) {
//       state.value2 = state.value1;
//       state.value1 = -1;
//       state.operator = 'mul';
//       show(state);
//     }
//     if (state.value1 !== undefined && state.value2 !== undefined) {
//       state.value1 = calc(state);
//       state.value2 = state.value1;
//       state.value1 = -1;
//       state.operator = 'mul';
//       show(state);
//     }
//   }
//   else if (type === 'equal') {
//     result.style.display = "block";
//     if (state.value2 !== undefined) {
//       state.value1 = calc(state);
//       state.value2 = undefined;
//       state.operator = undefined;
//     }
//     show(state);
//   }
//   else if (type === 'ac') {
//     result.style.display = "none";
//     formula.innerHTML = "Enter your formula and numbers";
//     resultValue.innerHTML = "";
//     state.value1 = undefined;
//     state.value2 = undefined;
//     state.operator = undefined;
//   }
//   else {

//   }
//   console.log(state);
// };