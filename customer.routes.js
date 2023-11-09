import express from "express";
const router = express.Router();
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
router.get("/customers/list", (req, res) => {
  return res.status(201).send(customers);
});

router.post("/customers/add", (req, res) => {
  const addedCustomer = req.body;
  customers.push(addedCustomer);
  return res.status(200).send({ message: "customer added successfully" });
});

router.delete("/customers/delete/:id", (req, res) => {
  const customerToBeDeleted = +req.params.id;
  const customer = customers.find((item) => {
    return item.id === customerToBeDeleted;
  });
  if (!customer) {
    res.status(404).send({
      message: `Customer with the id ${customerToBeDeleted} was not found`,
    });
  }
  const newCustomerList = customers.filter((item) => {
    return item.id !== customerToBeDeleted;
  });

  customers = [...newCustomerList];

  return res.status(200).send({ message: "customer removed successfully" });
});

router.put("/customers/edit/:id", (req, res) => {
  const updatedCustomer = req.body;
  console.log(req.body);
  const customerToBeUpdated = +req.params.id;
  const customer = customers.find((item) => {
    return item.id === customerToBeUpdated;
  });
  console.log(customer);
  if (!customer) {
    return res.status(404).send({
      message: `Customer with the id ${customerToBeUpdated} was not found`,
    });
  }

  const newCustomerList = customers.map((item) => {
    if (item.id == customerToBeUpdated) {
      item = { ...item, ...updatedCustomer };
    }
    return item;
  });

  customers = [...newCustomerList];

  return res.status(200).send({
    message: `Customer with the id ${customerToBeUpdated} updated successfully`,
  });
});

export default router;
