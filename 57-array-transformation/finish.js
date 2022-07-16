/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

// Мое решение (неправильное)
// const processPosts = (arr) => {
//   const processPosts = (arr) => {
//     let copyOfArr = [...arr];
  
//     for(let i = 0; i < arr.length; i++) {
//       copyOfArr[i].postId += 1000;
//     }
    
//      return copyOfArr;
//   }
// }

// Решение учителя

// const processPosts = (posts) => {
//   return posts.map((post) => {
//     return {
//       postId: post.postId + 1000,
//       postAuthor: post.author,
//       postCommentsQty: post.commentsQty === undefined ? 0 : post.commentsQty,
//     }
//   })
// }

// OptimizationCode

const processPosts = (posts) => {
  return posts.map((post) => {
    const { postId, author: postAuthor, commentsQty: postCommentsQty = 0} = post;
    return {
      postAuthor,
      postCommentsQty,
      postId: postId + 1000,
    }
  })
}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений
