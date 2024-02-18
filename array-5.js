// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий из первых букв каждой строки.

const firstLetters = (arr) => arr.map(([firstLetter]) => firstLetter);

console.log(firstLetters(['Say', 'hello', 'to', 'world'])); // ['S', 'h', 't', 'w']



// #2 
/*
function firstLetters(arr) {
  return arr.reduce((acc, str) => {
    acc.push(str[0]);
    return acc;
  }, []);
}

console.log(firstLetters(['Say', 'hello', 'to', 'world'])); // ['S', 'h', 't', 'w']
*/