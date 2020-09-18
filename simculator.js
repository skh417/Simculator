"use strick";

const display = document.querySelector(".cal-display"); // display section
const result = document.querySelector(".cal-result"); // result section

const inputData = (data) => {
  display.value = display.value + data;
  changeFontSize();
};

const deleteData = () => {
  display.value = display.value.slice(0, -1);
  changeFontSize();
};

const changeFontSize = () => {
  console.log(display.value);
  display.style.fontSize =
    display.value.length > 10
      ? display.value.length > 17
        ? `18px`
        : `30px`
      : `50px`;
  result.style.fontSize =
    result.value.length > 10
      ? result.value.length > 17
        ? `18px`
        : `30px`
      : `50px`;
};

const calculation = () => {
  let answer = eval(display.value);
  result.value = display.value ? answer : "";
  changeFontSize();
};

const resetData = () => {
  display.value = "";
  result.value = "";
};
