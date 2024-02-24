// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, начинающихся с заглавной буквы.

const initialArray = ['Say', 'hello', 'to', 'World']

function uppercaseOnly(array) {
  return array
    .filter(str => /^[A-Z]/.test(str))
    .map(str => str[0]);
}

const result = uppercaseOnly(initialArray);
console.log(result); // ['S', 'W']