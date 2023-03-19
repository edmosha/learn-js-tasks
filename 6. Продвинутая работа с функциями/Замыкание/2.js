// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.
//
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b ? true : false;
  }
}

function inArray(array) {
  return function (item) { return array.includes(item) }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2