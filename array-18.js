// Напишите функцию, которая принимает массив строк и возвращает новый массив, 
// состоящий только из строк, содержащих только буквы латинского алфавита.

const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']

function latinAlphabetOnly(array) {
  return array.filter(str => {
    return /^[a-zA-Z]+$/.test(str);
  });
}

const result = latinAlphabetOnly(initialArray)

console.log(result) // ['Say', 'to']