/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Vika';
const surname = 'Ryzhkova';
const prof = 'programmer';

const aboutMe = `Меня зовут ${myName} ${surname} и я ${prof}`;
const aboutMeTwo = 'Меня зовут ' + myName + ' ' + surname + 'и я ' + prof;

console.log(aboutMe);
console.log(aboutMeTwo);