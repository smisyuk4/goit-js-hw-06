//Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

//моя версія рішення
// const changeOutput = (event) => {
//     if (event.currentTarget.value === '') {
//         nameOutput.textContent = 'Anonymous';
//     }
    
//     if (event.currentTarget.value !== '') {
//         nameOutput.textContent = event.currentTarget.value; 
//     }
// }

//версія ментора 
const changeOutput = (event) => {
    const { value } = event.currentTarget

    nameOutput.textContent = value === '' ? 'Anonymous' : value;
}

nameInput.addEventListener('input', changeOutput)

