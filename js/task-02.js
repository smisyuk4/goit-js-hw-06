// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

// ingredients.forEach((ingridient) => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingridient;
  // list.append(item)
// })


//після перевірки ДЗ переписав так щоб елементи додавались на сторінку за 1 раз
let markupStr = '';
ingredients.forEach((ingridient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingridient;

  markupStr += item.outerHTML;  
})

list.insertAdjacentHTML('afterbegin', markupStr)