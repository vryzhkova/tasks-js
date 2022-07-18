/** ЗАДАЧА 58 - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

// Решение учителя ( без оператора delete)

{
  let _id, processed, gicart
  ;({  _id, processed, cart, ...person} = person)
  console.log(_id, processed, cart); // no erors
}

console.log(person);

// ReferenceError - because they are block-scoped variables
console.log(_id, processed, cart);


// Мое решение

  // delete person._id;
  // delete person.processed;
  // delete person.cart;

console.log(person)
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/
