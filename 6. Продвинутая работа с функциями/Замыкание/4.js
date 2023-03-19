// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) { // for вместо while
    let shooter = function() {
      alert( i );
    };
    shooters.push(shooter);
  }
  console.log(shooters)
  return shooters;
}
