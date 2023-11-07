import express from "express";

const app = express();

app.use(express.json());

const port = 8000;

// customer list
const customers = [
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
  // const newCostumer = req.body;
  // customers.push(newCostumer);
  console.log(req);
  return res.status(201).send({ message: "Costumer added successfully" });
});

app.delete("/customers", (req, res) => {
  userToDelete = customers.find((item) => {
    if (item.id == 1) {
      return res.send(item);
    } else {
      console.log("user with the given id not found");
    }
  });
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
