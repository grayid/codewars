// Напишите функцию, которая принимает два массива чисел и возвращает новый массив, 
// состоящий из элементов, которые есть в обоих массивах.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]



// #2
/*
function arraysCombine(array1, array2) {
  return [...array1, ...array2];
}

console.log(arraysCombine([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
*/


// #3 
/*
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

array1.push(...array2);

console.log(array1);
*/


// #4 с фильтрацией повторяющихся чисел 
/*
function arraysCombine(array1, array2) {
  const result = [];
  const combinedArray = array1.concat(array2);
  const uniqueArray = combinedArray.filter(
    (num, index, self) => self.indexOf(num) === index
  );
  return uniqueArray;
}
console.log(arraysCombine([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

console.log(arraysCombine([1, 2, 3, 4, 5, 6], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
*/