// ? Child_process => It is the module in node that enables us to access Operating System functionalities by running any system command inside a, well, child process.
// We can control the child process inp+ut stream and listen to its output stream. We can also control the arguments to be passed to the underlying Os command, and we can do whatever we want with that command's output. We can eg pipe the output of one command as the input to another and many more using the module.

// ? => There are four different ways to create a child process in Node : spawn(), fork(), exec(), execFile().

import child_process from "child_process";

const cp = child_process;

// The child_process module comes with many different functionalities.
// cp.exec("start chrome");
// cp.exec("start chrome https://www.youtube.co");

// we can get any output from a file using child_process
// we can integrate files from other languages into node with child_process

let output = cp.execSync("node test.js");
console.log("output " + output);
