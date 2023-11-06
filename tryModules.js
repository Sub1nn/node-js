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

// ? Lodash provides functions to iterate over arrays
// const numbers = [1, 2, 3, 4, 5];
// _.forEach(numbers, (num) => console.log(num));
// _.map(numbers, (num) => console.log(Math.pow(num, 2)));
// const filteredArr = _.filter(numbers, (num) => num % 2 == 0);
// console.log(filteredArr);

// ? We can merge objects using _.merge or _.assign
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObject = _.merge({}, obj1, obj2);
// console.log(mergedObject);

// ? lodash chaining Methods => Chaining allows you to perform a sequence of operations on a data set in a clean and readable way. You can chain together multiple Lodash methods and then call .value() to execute the chain.

// in the example below lodash is chaining the results from map function to filter and to value which gives the final result

// const result = _.chain(numbers)
//   .map((num) => num * 2)
//   .filter((num) => num % 2 === 0)
//   .value();
// console.log(result);

// ? Deep cloning

// const object = { a: 1, b: 2, xyz: { c: 3, d: 4 } };
// const cloned = _.cloneDeep(object);
// console.log(cloned);

// ? shorting arrays => sort arrays with _.sortBy or _.orderBy

// const users = [
//   { name: "Subin", age: 30 },
//   { name: "Rubin", age: 25 },
//   { name: "Sahil", age: 21 },
// ];

// const sortByName = _.sortBy(users, "name");
// console.log(sortByName);
// const sortByAge = _.orderBy(users, "age", "desc");
// console.log(sortByAge);

// ? Group and count items in an array using _.groupBy and _.countBy

// const surNames = ["dhakal", "khadka", "sharma", "dhakal", "khadka"];
// const groupedSurNames = _.groupBy(surNames);
// console.log(groupedSurNames);
// const countSurNames = _.countBy(surNames);
// console.log(countSurNames);

// ? Generate uniq IDs
// const uniqueId = _.uniqueId("item_");
// console.log(uniqueId);

// ? generate 10 uniq IDs
const uniqueIds = [];

for (let i = 0; i < 10; i++) {
  const uniqueId = _.uniqueId("item_");
  uniqueIds.push(uniqueId);
}
console.log(uniqueIds);
