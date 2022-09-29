// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoryName = document.querySelectorAll('h2');
const categoryList = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categoryName.length}`);

for (let i = 0; i < categoryName.length; i += 1){
    console.log(`Category: ${categoryName[i].outerText}`)
    console.log(`Elements: ${categoryList[i].childElementCount}`);
}