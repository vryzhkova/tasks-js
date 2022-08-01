/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Мое решение
// str.split('').forEach((item) => {
//   for(let i of vowels) {
//        if (item === i) {
//       vowelsCount += 1;
//     }
//   }
// })

// Решение учителя
// str.split('').forEach((item) => {
//     if (vowels.includes(item)) {
//     vowelsCount += 1;
//     }
// })

// Решение учителя 2
for (const item of str) {
    if (vowels.includes(item)) {
        vowelsCount += 1;
    }
}

console.log(vowelsCount)
// 9
