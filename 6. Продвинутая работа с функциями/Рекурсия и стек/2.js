// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

alert( factorial(5) ); // 120