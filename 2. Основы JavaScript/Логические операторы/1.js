// Напишите код, который будет спрашивать логин с помощью prompt.
//
// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».
//
// Пароль проверять так:
//
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

if (prompt('Введите логин') === 'Админ') {
  const pass = prompt('Введите пароль');
  if (pass === 'Я главный') {
    alert('Здравствуйте!');
  } else if (pass) {
    alert('Неверный пароль')
  } else {
    alert('Отменено')
  }
} else {
  alert('Я вас не знаю');
}