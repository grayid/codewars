// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" 
// и возвращает новый массив, состоящий только из объектов, у которых возраст больше 18 лет.

const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
];

const adultOnly = initialArray.filter((value) => value.age > 18);

console.log(adultOnly); // [{ "name": "Viktor", "age": 24 }]