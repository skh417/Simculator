"use strick";

// ** 앞으로 추가 or 수정할 내용 **
// 1. 잘못된 계산일 경우 표시해주기
// 2. 클릭 말고 키보드로도 숫자와 기호 입력 가능하게 하기
// 3. css 수정

const display = document.querySelector(".cal-display"); // display section
const result = document.querySelector(".cal-result"); // result section

const calculateByEnter = (e) => {
  if (e.keyCode === 13) {
    calculation();
  }
};

// 숫자나 기호 버튼 눌렀을 때 입력시켜주는 함수
const inputData = (data) => {
  display.value = display.value + data;
  changeFontSize();
};

// 입력된 값 지우기
const deleteData = () => {
  display.value = display.value.slice(0, -1);
  changeFontSize();
};

// 화면에 정보가 가득차면 폰트 크기 줄이기
const changeFontSize = () => {
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

// '=' 키 실행하기
const calculation = () => {
  let answer = eval(display.value);
  result.value = display.value ? answer : "";
  changeFontSize();
};

// 초기화 하기
const resetData = () => {
  display.value = "";
  result.value = "";
};

document.addEventListener("keydown", calculateByEnter);

// button 이 엔터를 눌렀을 때 작동되지 않도록 방지
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});
