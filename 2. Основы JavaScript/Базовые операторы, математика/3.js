// Какой результат будет у выражений ниже?

let res;

res = "" + 1 + 0; // "10"
res = "" - 1 + 0; // -1
res = true + false; // 1
res = 6 / "3"; // 2
res = "2" * "3"; // 6
res = 4 + 5 + "px"; // "9px"
res = "$" + 4 + 5; // "$45"
res = "4" - 2; // 2
res = "4px" - 2; // NaN
res = "  -9  " + 5; // "  -9  5"
res = "  -9  " - 5; // -14
res = null + 1; // 1
res = undefined + 1; // NaN
res = " \t \n" - 2; // -2