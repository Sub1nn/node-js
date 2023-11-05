// import os from "os";
// const _ = require("lodash");
import _ from "lodash";
// ? Lodash => Helps in working with arrays, numbers, objects, strings, etc.
// ? Lodash => Its modular methods are great for iterating arrays, objects, strings. Manipulating and testing values and creating composite functions

// console.log(os.version());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());

// ? Helps generate random number
// const num = _.random(0, 20);
// console.log(num);

// ? only print the result once no matter how many func calls
// const greet = _.once(() => {
//   console.log("Hii There!");
// });
// greet();
// greet();

// Lodash provides functions to iterate over arrays
const numbers = [1, 2, 3, 4, 5];
_.forEach(numbers, (num) => console.log(num));
_.map(numbers, (num) => console.log(Math.pow(num, 2)));
const filteredArr = _.filter(numbers, (num) => num % 2 == 0);
console.log(filteredArr);
