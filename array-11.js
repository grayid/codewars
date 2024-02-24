// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по убыванию возраста.
const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

const sortByAge = initialArray.sort((a, b) => b.age - a.age)

<<<<<<< HEAD
console.log(sortByAge)
=======
console.log(sortByAge)



/*
const result = sortByAge(array) {
  return array.sort((a, b) => b.age - a.age);
}// Реализовать эту функцию

console.log(result) // [{ "name": "Abiba", "age": 35 }, { "name": "Viktor", "age": 24 }, { "name": "Aboba", "age": 16 },]




function getSortedArrayByAge(array) {
  return array.sort((a, b) => b.age - a.age);
}

const initialArray = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 22 }
];

const result = getSortedArrayByAge(initialArray);
console.log(result);
*/
>>>>>>> 96fd2be42134b997224bc69cf907b2ee5b18bcc2
