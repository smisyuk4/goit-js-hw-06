"use strict";

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const funcDecrement = () => {
        counterValue = counterValue - 1;
        value.textContent = counterValue;
}

const funcIncrement = () => {
        counterValue = counterValue + 1;
        value.textContent = counterValue;
}

btnDecrement.addEventListener('click', funcDecrement);
btnIncrement.addEventListener('click', funcIncrement);
