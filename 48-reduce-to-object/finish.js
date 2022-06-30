/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

// Мое решение

// const quantitiesByCategories = (products) => {
//   return products.reduce((acc, product, idx) => {
//     console.log(idx, acc);
//     if(acc.hasOwnProperty(product.category)) {
//       acc[product.category] += product.quantity;
//     } else {
//       acc[product.category] = product.quantity;
//     }
//     return acc;
//   }, {})
// }

// Решение учителя

const quantitiesByCategories = (products) => {
  return products.reduce((qtysByCategories, product) => {
    const { category, quantity } = product;

    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity;
    return qtysByCategories;
  }, {})
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
