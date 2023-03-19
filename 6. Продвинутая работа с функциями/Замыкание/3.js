// У нас есть массив объектов, который нужно отсортировать:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

console.log('\ninitial')
users.forEach(user => console.log(user.name, user.age));

console.log('\nname')
users.sort(byField('name'))
users.forEach(user => console.log(user.name, user.age));

console.log('\nage')
users.sort(byField('age'))
users.forEach(user => console.log(user.name, user.age));