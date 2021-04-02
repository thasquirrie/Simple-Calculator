const start = {
  valueToDisplay: 0,
  firstNumber: null,
  operator: null,
  waitForSecondNumber: false
};

let buttons = document.querySelectorAll('.key-number');

buttons.forEach(function (item) {
  console.log(item);
  console.log(item.id.replace("button-", ""));
  item.addEventListener("click", function () {
    button(item.id.replace("button-", ""));
  });
});