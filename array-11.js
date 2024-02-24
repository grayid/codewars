// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив, отсортированный по убыванию возраста.
const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

const sortByAge = initialArray.sort((a, b) => b.age - a.age)

console.log(sortByAge)