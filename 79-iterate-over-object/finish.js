/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

//  My solution
// const sumObjectValues = (obj) => {
//   let result = 0;
//   const values = Object.values(obj)
//   for (const num of values) {
//     if (typeof num === 'number') {
//       result += num
//         } else {
//       result;
//     }
//   }
//     return result;
// }

//  teacher's solution

const sumObjectValues = (nums) => {
  let sum = 0;
  
  Object.keys(nums).forEach((key) => {
    if(typeof nums[key] === 'number') {
      sum += nums[key];
    } 
  })

    return sum;
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
