// Напишите функцию, которая принимает массив строк и возвращает новый массив, 
// состоящий только из строк, длина которых больше 5 символов.

const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students'];

const longerThanFive = initialArray.reduce((acc, element) => {
  if (element.length > 5) {
    return [...acc, element];
  }
  return acc;
}, []);

console.log(longerThanFive); // ['javascript', 'students']


/*
// #2 

const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students'];

const longerThanFive = initialArray.filter((currentValue) => currentValue.length > 5);

console.log(longerThanFive); // ['javascript', 'students']
*/
