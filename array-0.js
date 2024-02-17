// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из четных чисел.

const initialArray = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = (number) => number % 2 === 0;
const evenNumbersOnly = initialArray.filter(evenNumbers);

console.log(evenNumbersOnly); // [2, 4, 6, 8]


// #2 
/*
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbersOnly = [];
for (let i = 0; i <= initialArray.length; i++) {
  if (initialArray[i] % 2 === 0) {
    evenNumbersOnly.push(initialArray[i]);
  }
}

console.log(evenNumbersOnly); // [2, 4, 6, 8]
*/



// #3 
/*
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbersOnly = initialArray.reduce((acc, element) => {
  if (element % 2 === 0) {
    return [...acc, element];
  }
  return acc;
}, []);

console.log(evenNumbersOnly); // [2, 4, 6, 8]
*/