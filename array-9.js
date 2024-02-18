// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из уникальных элементов.

const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]; 

function uniqueOnly(arr) {
  const elemCount = {};
  for (const num of arr) {
    if (elemCount[num]) {
      elemCount[num]++;
    } else {
      elemCount[num] = 1;
    }
  }
  const onceUnique = [];
  for (const num in elemCount) {
    if (elemCount[num] === 1) {
      onceUnique.push(Number(num));
    }
  }
  return onceUnique;
}

console.log(uniqueOnly(initialArray)); // [3, 5, 6, 9]