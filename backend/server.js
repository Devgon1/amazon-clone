import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json()); //middleware that is parsing jason data in the body of request
app.use(express.urlencoded({ extended: true }));

/*Connect to the mongo db, in this case is located in our computer */
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazonClone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/*api de datos, envia los datos de ese documento.en este caso data*/

/*get rid of this after putting the app.use(.....productRouter) 
app.get("/api/products", (req, res) => {
  res.send(data.products);
});


app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((item) => item._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not fround" });
  }
});
*/
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at ${port} port`);
});
