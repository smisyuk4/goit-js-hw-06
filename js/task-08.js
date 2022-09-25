"use strict";

// Напиши скрипт управління формою логіна.

// 1. Обробка відправлення форми form.login - form 
// повинна відбуватися відповідно до події submit.

// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.

// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.

// 4. Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.

// 5. Виведи об'єкт із введеними даними в консоль 
// і очисти значення полів форми методом reset.

const refs = {
    form: document.querySelector('.login-form'),
}

// const onClickSubmit = (event) => {
//     event.preventDefault();

//     const { email, password } = event.currentTarget;

//     if (email.value === '' || password.value === '') {
//         window.alert('Увага! Всі поля повинні бути заповнені!')
//     }

//     const dataForm = {
//         email: email.value,
//         password: password.value,
//     }

//     event.currentTarget.reset();

//     return console.log(dataForm);
// }

// refs.form.addEventListener('submit', onClickSubmit)

// const onClickSubmit2 = (event) => { 
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const formValues = {}

//     formData.forEach((value, key) => {
//         if (value === '') {
//             window.alert('Увага! Всі поля повинні бути заповнені!')
//         }

//         formValues[key] = value;
//     })

//     event.currentTarget.reset();

//     return console.log(formValues);
// } 

// refs.form.addEventListener('submit', onClickSubmit2)


const onClickSubmit3 = (event) => { 
    event.preventDefault();   

    if (refs.form.elements.email.value !== '' && refs.form.elements.password.value !== '') {
        const formValues = {
            email: refs.form.elements.email.value,
            password: refs.form.elements.password.value,
        }

        event.currentTarget.reset();

        return console.log(formValues);
    }

    window.alert('Увага! Всі поля повинні бути заповнені!')
} 

refs.form.addEventListener('submit', onClickSubmit3)
