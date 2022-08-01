/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Мое решение
// function mult(objectWithNumbers) {
//   const values = Object.values(objectWithNumbers);
//   let result = 1;

//   for(const value of values) {
//     result *= value;
//   }
  
//   return result;
// }

// Решение учителя 1
// const mult = (nums) => {
//   const { x, y, z } = nums;

//   return x * y * z;
// }

// Решение учителя 2
const mult = ({ x, y, z }) =>  x * y * z;

const result = mult(objectWithNumbers)
console.log(result)
// 300
