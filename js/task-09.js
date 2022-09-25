"use strict";

// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
}

const onTargetButtonClick = () => {
  const currentColor = getRandomHexColor();

  refs.spanColor.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}

refs.btnChangeColor.addEventListener('click', onTargetButtonClick)