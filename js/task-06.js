// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість
// - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const refs = {
    input: document.querySelector('#validation-input'),
    dataLength: document.querySelector('#validation-input').getAttribute('data-length'),
}

const checkInput = (event) => {
    if (Number(refs.dataLength) === refs.input.value.length) {
        refs.input.classList.add('valid')
    } 

    if (Number(refs.dataLength) !== refs.input.value.length) {
        refs.input.classList.add('invalid')
    }

    if (Number(refs.dataLength) === refs.input.value.length
        && refs.input.classList.contains('invalid')) {
        refs.input.classList.replace('invalid', 'valid')
    }
    
    if (Number(refs.dataLength) !== refs.input.value.length
        && refs.input.classList.contains('valid')) {
        refs.input.classList.replace('valid', 'invalid')
    }        
}

refs.input.addEventListener('blur', checkInput)