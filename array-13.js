// Напишите функцию, которая принимает два массива чисел и возвращает новый массив, состоящий из элементов первого массива, 
// которых нет во втором массиве.

const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]


function compare(array1, array2) {
  return array1.filter(element => array2.indexOf(element) === -1);
}

const result = compare(initialArray1, initialArray2);
console.log(result); // [1, 2, 5]