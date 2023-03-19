// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
//
// Используя setInterval.
// Используя рекурсивный setTimeout.

// setInterval
function printNumbers(from, to) {
  let num = from;

  const timerId = setInterval(() => {
    console.log(num);
    num++;

    if (num == to + 1) {
      clearInterval(timerId);
    }
  }, 1000)
}

// setTimeout
function printNumbers(from, to) {
  let num = from;

  setTimeout(function print() {
    console.log(num);

    if (num < to) {
      setTimeout(print, 1000);
    }
    num++;
  }, 1000);

}

printNumbers(3, 6);