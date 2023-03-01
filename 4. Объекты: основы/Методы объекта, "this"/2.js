// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
//
//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();