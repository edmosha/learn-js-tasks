// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  return str
    .split('-')
    .map((word, i) => i != 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join('');
}