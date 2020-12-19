import express from "express";
import data from "./data.js";

const app = express();

/*api de datos, envia los datos de ese documento.en este caso data*/
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at ${port} port`);
});
