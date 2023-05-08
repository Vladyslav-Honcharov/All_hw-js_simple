function filterBy(firstArg, secondArg) {
  let result = firstArg.filter((parametr) => typeof parametr !== type);
  return result;
}
let firstArg = ["hello", "world", 23, "23", null, true, {}];
let secondArg = " ";
let type = typeof secondArg;
console.log(type);
console.log(filterBy(firstArg, secondArg));

// function checkType(variable) {
//   return variable === null ? 'null' : typeof variable
// }

// /*forEach variant*/

// // function filterBy(arr, type) {
// //     const filteredArr = []
// //     arr.forEach((el) => {
// //         if (checkType(el) !== type) filteredArr.push(el)
// //     })
// //     return filteredArr
// // }

// /*filter variant*/

// function filterBy(arr, type) {
//   return arr.filter(element => checkType(element) !== type)
// }

// const arr = [1, {name: 'user',}, true, null, undefined, 'anton', Symbol('$'), 1n]
// const checkedTypes = ['string', 'number', 'object', 'boolean', 'null', 'undefined', 'symbol', 'bigint']
// checkedTypes.forEach(type => {
//   console.log(${type} type deleted)
//   console.table(filterBy(arr, type))
// })
