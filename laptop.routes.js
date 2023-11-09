import express from "express";
const router = express.Router();

let laptopList = [
  {
    id: 1,
    name: "Mac Book",
    company: "Apple",
    price: "2000",
  },
  {
    id: 2,
    name: "Msi GE62",
    company: "MSI",
    price: "1500",
  },
];

router.get("/laptops/list", (req, res) => {
  res.status(200).send(laptopList);
});

router.post("/laptops/add", (req, res) => {
  const newLaptop = req.body;
  laptopList.push(newLaptop);
  res.status(201).send({ message: "Laptop added successfully" });
});

router.delete("/laptops/delete/:id", (req, res) => {
  const laptopToBeRemoved = +req.params.id;

  const laptop = laptopList.find((item) => {
    return item.id === laptopToBeRemoved;
  });

  if (!laptop) {
    res.status(404).send({ message: "Laptop not found" });
  }

  const newLaptopList = laptopList.filter((item) => {
    return item.id !== laptopToBeRemoved;
  });

  laptopList = [...newLaptopList];

  return res.status(200).send({ message: "Laptop removed successfully" });
});

router.put("/laptops/edit/:id", (req, res) => {
  const updatedLaptop = req.body;
  const laptopToBeUpdated = +req.params.id;

  const laptop = laptopList.find((item) => {
    return item.id === laptopToBeUpdated;
  });

  if (!laptop) {
    res.status(404).send({ message: "Laptop was not found" });
  }

  const newLaptopList = laptopList.map((item) => {
    if (item.id === laptopToBeUpdated) {
      item = { ...item, ...updatedLaptop };
    }
    return item;
  });
  laptopList = [...newLaptopList];

  return res.status(200).send({ message: "Laptop was updated successfully" });
});

export default router;
