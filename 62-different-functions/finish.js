/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// 1.2 - мы можем вызвать функции до ее объявления
//console.log(firstFunction(2, 3));

// создаем переменную firstFunction с ключевым словом function
function firstFunction(a, b) {
  return a + b
}
 // 1.1 - мы можем присвоить новое значение 
// firstFunction = '123';
// console.log(firstFunction);


// 2.2 мы не можем вызвать функцию до ее объявление
// console.log(secondFunction(2, 5));

// Создаем переменную и присваиваем ей анонимное функциональное выражение (у ф-ции нет имени)
const secondFunction = function (a, b) {
  return a + b
}

// 2.1 мы не можем присвоить переменной другое значение
//secondFunction = true;


console.log(firstFunction(2, 5));

console.log(secondFunction(2, 4));