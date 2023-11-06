import inquirer from "inquirer";
//import { result } from "lodash";

// const questions = [
//   {
//     type: "input",
//     name: "num",
//     message: "Enter number",
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   let result;
//   answers.num % 2 === 0 ? (result = "even") : (result = "odd");
//   console.log(result);
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "num1",
      message: "Enter a number\n",
    },
    {
      type: "input",
      name: "num2",
      message: "Enter second number\n",
    },
    {
      type: "input",
      name: "string",
      message: "Tell either add, sub or multiply\n",
    },
  ])
  .then((ans) => {
    let result = 0;
    // if (ans.string === "add") {
    //   result = +ans.num1 + +ans.num2;
    // } else if (ans.string === "sub") {
    //   result = +ans.num1 - +ans.num2;
    // } else {
    //   result = +ans.num1 * +ans.num2;
    // }
    // console.log(result);
    // console.log(ans);
    ans.string === "add"
      ? (result = +ans.num1 + +ans.num2)
      : ans.string === "sub"
      ? (result = +ans.num1 - +ans.num2)
      : (result = +ans.num1 * +ans.num2);
    console.log(result);
  });
