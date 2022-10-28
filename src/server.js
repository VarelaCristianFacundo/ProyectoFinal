const express = require("express");
const cartRouter = require("./routes/carrito.routes");
const productRouter = require("./routes/productos.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productRouter);
app.use("/api/carritos", cartRouter);

const port = process.env.PORT | 8080;

app.listen(port, () => console.log(`Server listening on port ${port}`));
