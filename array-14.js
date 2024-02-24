// Напишите функцию, которая принимает массив строк и возвращает новый массив, состоящий только из строк, содержащих подстроку "js"

const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes']

function contains(array) {
  return array.filter(element => element.includes('js'));
}

const result = contains(initialArray);
console.log(result); // ['js', 'awdjsdc']