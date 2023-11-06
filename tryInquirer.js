import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "num",
    message: "Enter number",
  },
];

inquirer.prompt(questions).then((answers) => {
  let result;
  answers.name % 2 === 0 ? (result = "even") : (result = "odd");
  console.log(result);
});
