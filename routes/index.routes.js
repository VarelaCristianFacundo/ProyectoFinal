const {
    Router
} = require("express");
const router = Router();
const productosRoute = require("./productos.routes");
const carritoRoute = require("./carrito.routes");
const controller = require("../controllers/index.controller");

router.get("/", controller.index);
router.use("/productos", productosRoute);
router.use("/carrito", carritoRoute);

module.exports = router;