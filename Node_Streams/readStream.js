import fs from "fs";

let content = "";

let readStream = fs.createReadStream("input.txt"); //filename to be read should be passed inside the createreadstream

// ? .on => is a event listener which in this case is listening to the 'data' event which we are getting from our fs module when we are using stream. The event gets started from the entry point of that data. Then the stream takes a function which basically reads the data as (chunk). Now as long as the data is coming in chunks, it adds up chunk by chunk and get stored in our content variable.

readStream.on("data", (chunk) => {
  content += chunk;
});

readStream.on("end", () => {
  console.log(content);
});

readStream.on("error", (err) => {
  console.log(err);
});
