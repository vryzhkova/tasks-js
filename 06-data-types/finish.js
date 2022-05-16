/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const str = 'Vika';
const num = 12;
const bul = true;
const typeNull = null;
const und = undefined;
const obj = {
    name: 'Vika',
    age: 18,
};
const arr = [1, 'a', null];

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bul));
console.log(typeof(typeNull));
console.log(typeof(und));
console.log(typeof(obj));
console.log(typeof(arr));
