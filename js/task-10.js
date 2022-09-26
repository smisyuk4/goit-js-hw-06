"use strict";

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.

// 2. Кожен елемент після першого повинен бути 
// ширшим і вищим від попереднього на 10px.

// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const refs = {
  countInput: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
}

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  const num = refs.countInput.value;

  let markupArr = [];
  let sizeBox = 30;

  for (let i = 0; i < num; i += 1){    
    markupArr = [...markupArr, 
        `<div style="background-color:${getRandomHexColor()}; 
          width: ${sizeBox}px; 
          height: ${sizeBox}px">
        </div>`];
    
    sizeBox += 10;
  }

  const markupString = markupArr.join('');

  refs.box.insertAdjacentHTML('afterbegin', markupString);

  refs.countInput.value = '';
}

const destroyBoxes = () => {
  const boxChilds = document.querySelectorAll('#boxes div');
  boxChilds.forEach(child => child.remove())
}

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);