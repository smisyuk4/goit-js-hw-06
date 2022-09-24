"use strict";

// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) 
// і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),   
}

const changeTextSize = (event) => {
    refs.span.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener('input', changeTextSize)