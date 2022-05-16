/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


// 1 вариант

const greeting = () => {
    console.log('Hello world');
}

setTimeout(greeting, 5000);


// 2 вариант

setTimeout(() => console.log('Hello world!'), 5000);