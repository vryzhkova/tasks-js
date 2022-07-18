/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

// Решение учителя
class ExtendedArray extends Array { // создаем класс который расширяет втстроенный Array
    sum() {                         // добавляем в новый класс метод sum
        return this.reduce((sum, num) => sum + num, 0) // this представляет собой экземляр класса ExtendedArray, sum - сумма всех элементов массива, 
      }

    onlyNumbers() {  // добавляем в новый класс метод onlyNumbers
        return this.filter((el) => typeof el === 'number')
      }
}

// Вызваем

const myExtendedArray = new ExtendedArray(10, 4, 5); 
console.log(myExtendedArray);
console.log(myExtendedArray.sum());

const myExtendedArray2 = new ExtendedArray(8, 'vika', 5, 'abc'); 
console.log(myExtendedArray2.onlyNumbers());

myExtendedArray2.forEach((el) => console.log(el));
myExtendedArray2.map((el) => console.log(el));
