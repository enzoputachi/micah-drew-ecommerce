import express from "express";
import products from "./data.js";
import cors from "cors"; //to allow transfer of data

const app = express();

app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res)  => {
  res.send(data.products.find((x) => x._id === req.params.id));
});

app.listen(5000, () => {
  console.log("serve at http://localhost:5000");
});
