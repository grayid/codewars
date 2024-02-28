// Напишите функцию, которая принимает два массива объектов с полями "имя" и "возраст" и возвращает новый массив, 
// состоящий только из объектов, которые есть в обоих массивах.

const initialArray1 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
]

const initialArray2 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function unique(arr1, arr2) {
  const map = {};
  const result = [];

  arr1.forEach(obj => {
    map[obj.name] = obj;
  });

  arr2.forEach(obj => {
    if (map[obj.name]) {
      result.push(obj);
    }
  });

  return result;
}

const uniqueArray = unique(initialArray1, initialArray2) 

console.log(uniqueArray) // [{ "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 }]