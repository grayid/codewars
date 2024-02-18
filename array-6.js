// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" 
// и возвращает новый массив, отсортированный по возрастанию возраста.


const initialArray = [
  { name: 'Viktor', age: 24 },
  { name: 'Aboba', age: 16 },
  { name: 'Abiba', age: 35 },
];

const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(initialArray)); 
// [{ "name": "Aboba", "age": 16 }, { "name": "Viktor", "age": 24 }, { "name": "Abiba", "age": 35 },]