// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// рекурсия
function printList(list) {
  if (list.next !== null) {
    printList(list.next);
  }
  alert(list.value);
}

// цикл
function printList(list) {
  let tmp = list;
  let values = [];

  while (tmp) {
    values.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = 0; i < values.length; i++) alert(values[i]);
}

printList(list);