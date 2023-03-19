// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

// только свойства функции
function makeCounter() {
  function counter() {
    return counter.count++
  }
  counter.count = 0;
  counter.set = (value) => {counter.count = value}
  counter.decrease = () => {counter.count -= 1}

  return counter;
}

// с замыканием
function makeCounter() {
  let count = 0;

  function counter() {
    return count++
  }

  counter.set = (value) => {count = value}
  counter.decrease = () => {count -= 1}

  return counter;
}