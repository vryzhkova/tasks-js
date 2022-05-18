/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Mazda',
        price: 100000,
        isAvailableForSale: true,
    },
    {
        carBrand: 'BMW',
        price: 200000,
        isAvailableForSale: true,
    },
    {
        carBrand: 'Opel',
        price: 300000,
        isAvailableForSale: true,
    },
]

cars.push({
    carBrand: 'Loft',
    price: 400000,
    isAvailableForSale: true,
})

console.log(cars);
