/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

// Мое решение

// 1 способ

// const areArraysEqual = (firstArray, secondArray) => {
//     return JSON.stringify(firstArray) == JSON.stringify(secondArray);
// }

// 2 способ

const areArraysEqual = (firstArray, secondArray) => {
    if(firstArray.length !== secondArray.length) {
        return false;
    }

    for(let i = 0; i < firstArray.length; i++) {
        if(firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

// Решение учителя

// const areArraysEqual = (firstArray, secondArray) => {
//     if(firstArray.length === secondArray.length 
//         && firstArray.every((element, index) => element === secondArray[index])
//         ) {
//             return true;
//         }
//         return false;
// }


const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

// Ответ: Так как массивы - это ссылочный тип данных, 
// то два массива, с виду идентичных, будут НЕ равны друг другу


const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
