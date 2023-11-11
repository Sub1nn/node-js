import fs from "fs";

let data = "I love to code";

let writeStream = fs.createWriteStream("Node_Streams/output.txt");

writeStream.write(data, "utf-8");

writeStream.end();

writeStream.on("finish", () => {
  console.log("writing Completed");
});
