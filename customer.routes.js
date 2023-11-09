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
router.get("/customer/list", (req, res) => {
  console.log(customers);
});

export default router;
