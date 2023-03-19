// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
  let fn1 = 1, fn2 = 2;
  for (let i = 3; i < n; i++) {
    [fn1, fn2] = [fn2, fn1 + fn2];
  }
  return fn2;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757