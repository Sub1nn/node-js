// import events module
import events from "events";
// create an event emitter object
const eventEmitter = new events.EventEmitter();

//create an event handler as follows:
const connectHandler = function connected() {
  console.log("connection successful");
};

// emit the data received event
eventEmitter.emit("data_received");

// bind the connection event with the handler
eventEmitter.on("connection", connectHandler);

// bind the data received event with the anonymous function
eventEmitter.on("data_received", () => {
  //perform some operations
  console.log("data received successfully");
});

//fire the connection event
eventEmitter.emit("connection");
