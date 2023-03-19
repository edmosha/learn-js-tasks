// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
// откладывающую вызов функции на ms миллисекунд.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

Function.prototype.defer = function(ms) {
  let funcThis = this;
  return function() {
    return setTimeout(() => funcThis.call(this, ...arguments), ms)
  }
}

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.