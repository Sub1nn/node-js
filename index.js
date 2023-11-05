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

const divided = (a, b) => {
  return divide(a, b);
};
console.log(divided(6, 3));

const multiplied = (a, b) => {
  return multiply(a, b);
};
console.log(multiplied(2, 5));

const isEvenOrOdd = (a) => {
  return evenOrOdd(a);
};
console.log(isEvenOrOdd(5));
