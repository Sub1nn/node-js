//  Pipe => Takes data from a file and sends the data into another file as an input and write that data into the another file

import fs from "fs";

let readStream = fs.createReadStream("./input.txt");
readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

let writeStream = fs.createWriteStream("./output.txt");
writeStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});

readStream.pipe(writeStream);
