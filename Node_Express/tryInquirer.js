import inquirer from "inquirer";

//? Inquirer => The inquirer package is a popular Node.js library that provides an interactive command-line interface for prompting and gathering user input. It's commonly used in CLI (Command Line Interface) applications to create interactive menus, forms, and more

// ? Prompting for user input => inquirer can be used to prompt the user for input, such as text, numbers, or choices.
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

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "num1",
//       message: "Enter a number\n",
//     },
//     {
//       type: "input",
//       name: "num2",
//       message: "Enter second number\n",
//     },
//     {
//       type: "input",
//       name: "string",
//       message: "Tell either add, sub or multiply\n",
//     },
//   ])
//   .then((ans) => {
//     let result = 0;
//     if (ans.string === "add") {
//       result = +ans.num1 + +ans.num2;
//     } else if (ans.string === "sub") {
//       result = +ans.num1 - +ans.num2;
//     } else {
//       result = +ans.num1 * +ans.num2;
//     }
//     console.log(result);
//     console.log(ans);

//     ans.string === "add"
//       ? (result = +ans.num1 + +ans.num2)
//       : ans.string === "sub"
//       ? (result = +ans.num1 - +ans.num2)
//       : (result = +ans.num1 * +ans.num2);
//     console.log(result);
//   });

// ? choice selection => create a list of choices for the user to pick from.

// inquirer
//   .prompt([
//     {
//       type: "list",
//       name: "color",
//       message: "Select your favorite color:",
//       choices: ["Red", "Green", "Blue", "Yellow"],
//     },
//   ])
//   .then((answers) => {
//     console.log(`Your favorite color is ${answers.color}`);
//   });

// ? confirmation prompts => ask the user to confirm a decision with a simple "yes" or "no" question:

inquirer
  .prompt([
    {
      type: "user confirmation",
      name: "confirm",
      message: "Do you want to conform? y/n",
    },
  ])
  .then((ans) => {
    ans.confirm === "y"
      ? console.log("You chose to proceed")
      : console.log("You are ending here");
  });
