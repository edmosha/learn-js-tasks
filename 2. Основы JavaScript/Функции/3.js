// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x, n) {
  return x ** n;
}

const x = prompt('Введите x');
const n = prompt('Введите n');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}

