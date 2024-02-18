// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, умноженных на два.

const initialArray = [1, 2, 3, 4];

const multiplyByTwo = (arr) => {
  return arr.map((num) => num * 2);
};

const result = multiplyByTwo(initialArray);

console.log(result); // [2, 4, 6, 8]