import fullName from "./ss.js";
import add from "./add.js";
import divide from "./divide.js";
import multiply from "./multiply.js";
import evenOrOdd from "./findEvenOrOdd.js";

const showFullName = (firstName, lastName) => {
  console.log(fullName(firstName, lastName));
};
showFullName("john", "cena");

const added = (a, b) => {
  console.log(add(a, b));
};
added(5, 3);

// const divided = divide(9, 3);
// console.log(divided);
const divided = (a, b) => divide(a, b);
console.log(divided(6, 3));

// const multiplied = (a, b) => {
//   return multiply(a, b);
// };
const multiplied = (a, b) => multiply(a, b);
console.log(multiplied(2, 5));

const isEvenOrOdd = (num) => {
  return evenOrOdd(num);
};
console.log(isEvenOrOdd(6));
