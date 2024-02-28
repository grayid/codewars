// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий из элементов, у которых индекс чётный.

const initialArray = [19, 1, 3, 4, 5, 6, 20, 8]

function evenIndexOnly(array) {
  return array.reduce((result, element, index) => {
    if (index % 2 === 0) {
      result.push(element);
    }
    return result;
  }, []);
}

const result = evenIndexOnly(initialArray);
console.log(result);  // [19, 3, 5, 20]