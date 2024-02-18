// Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// состоящий из элементов, которые повторяются более одного раза.

function duplicatesOnly(arr) {
  arr.sort((a, b) => a - b);
  let counter = 1;
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        result.push(arr[i]);
      }
      counter = 1;
    }
  }
  if (counter > 1) {
    result.push(arr[arr.length - 1]);
  }
  return result;
}

console.log(duplicatesOnly([1, 2, 3, 2, 6, 5, 4, 4, 9, 1])); // [1, 2, 4]
 
// #2 
/*
function duplicatesOnly(arr) {
  const elementCounts = {};
  const result = [];

  for (const num of arr) {
    if (elementCounts[num]) {
      elementCounts[num]++;
    } else {
      elementCounts[num] = 1;
    }
  }

  for (const num in elementCounts) {
    if (elementCounts[num] > 1) {
      result.push(Number(num));
    }
  }
  return result;
}

console.log(duplicatesOnly([1, 2, 3, 2, 6, 5, 4, 4, 9, 1])) // [1, 2, 4]
*/