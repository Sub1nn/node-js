import express from "express";

const app = express();

// Path <=> Middleware => "middleware" is a software that sits between different components of a software stack and facilitates communication and data processing. Middleware can be thought of as a bridge or intermediary that adds specific functionality to an application or system without being the core of the application itself.
// ? app.use() is an express method to mount middleware functions.
// ? express.json() is a built-in middleware in Express that parses incoming JSON data (processes the data in JSON format).

app.use(express.json());

const port = 8000;

// customer list
// let is used as later we are going to update this customer list by new customer list
let customers = [
  {
    id: 1,
    name: "Rohan Bhandari",
    address: "Baneswor",
  },
  {
    id: 2,
    name: "Milan Khaka",
    address: "Koteswor",
  },
];

// get all customers
app.get("/customers", (req, res) => {
  return res.status(200).send(customers);
});

//add a customer
//the request here is looking for a customer object which should be added inside the list of customers. create the object in postman with a new post request. BODY -> raw -> JSON -> object {}
app.post("/customers/add", (req, res) => {
  const newCostumer = req.body;
  customers.push(newCostumer);
  // console.log(req);
  return res.status(201).send({ message: "Costumer added successfully" });
});

// Request handles the actual data of the costumer who needs to be deleted who is in the database. go to Postman Body => Raw => JSON. You can delete a costumer by entering the costumer ID as a JSON object.
app.delete("/customers/delete", (req, res) => {
  const customerToBeRemoved = req.body.id; // postman sending req in the body
  //console.log(customerToBeRemoved);
  //check if customer with provided id exists
  const customer = customers.find((item) => {
    return item.id === customerToBeRemoved;
  });
  //console.log(customer);

  // if not customer, throw error
  if (!customer) {
    res.status(404).send({ message: "Customer not found" });
  }

  // now remove the customer from the list
  const newCustomersList = customers.filter((item) => {
    return item.id !== customerToBeRemoved;
  });
  //console.log(newCustomersList);

  // update old customer list with new customer list

  customers = [...newCustomersList];
  console.log(customers);

  return res.status(200).send({ message: "The costumer is deleted" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
