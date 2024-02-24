// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, 
// которые больше среднего значения всех элементов массива.

const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]

function greaterThanAverage(array) {
  const sum = array.reduce((acc, currentValue) => acc + currentValue, 0);
  const average = sum / array.length;
  return array.filter(element => element > average);
}

const result = greaterThanAverage(initialArray)

console.log(result); // [234, 59, 78]