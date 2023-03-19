// Напишите функцию printList(list), которая выводит элементы списка по одному
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

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
  alert(list.value);
  if (list.next !== null) {
    printList(list.next);
  }
}

// цикл
function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);