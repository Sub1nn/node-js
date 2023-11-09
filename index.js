import express from "express";
import laptopRoutes from "./laptop.routes.js";

const app = express();

app.use(express.json());
app.use(laptopRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
