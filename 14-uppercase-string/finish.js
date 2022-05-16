/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const str = 'I like JavaScrtipt';

console.log(str instanceof String);
console.log(typeof(str));

const strUpperCase = str.toUpperCase();
console.log(strUpperCase);

// Создание экземпляра

// const myString = new String('Vika');
// console.log(myString instanceof String);
// console.log(typeof myString);
// console.log(myString.toUpperCase());