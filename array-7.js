// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

const initialArray = [1, 2, 3, 4, 5];

const result = initialArray.reduce((sum, elem) => sum + elem, 0);

console.log(result); // 15


// #2 
/*
const initialArray = [1, 2, 3, 4, 5];

let result = 0;

initialArray.forEach((elem) => {
  result += elem;
});
console.log(result); // 15

*/