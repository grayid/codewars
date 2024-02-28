// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" 
// и возвращает новый массив, состоящий только из уникальных имён.

const initialArray = [
  { "name": "Viktor", "age": 24 },
  { "name": "Aboba", "age": 16 },
  { "name": "Abiba", "age": 35 },
  { "name": "Viktor", "age": 35 },
  { "name": "Abiba", "age": 35 },
];

function unique(arr) {
  const nameCounts = {};
  arr.forEach(obj => {
    nameCounts[obj.name] = (nameCounts[obj.name] || 0) + 1;
  });

  const result = arr.filter(obj => nameCounts[obj.name] === 1);
  return result;
}

const uniqueNames = unique(initialArray);
console.log(uniqueNames); // [{name: 'Aboba', age: 16}]
