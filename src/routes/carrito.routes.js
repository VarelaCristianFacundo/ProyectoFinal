const {
    Router
} = require("express");
const router = Router();
const controller = require("../controllers/carrito.controller");
const {
    adminAuth
} = require("../middlewares/middlewares");


router.post("/", adminAuth(true), controller.newCarrito);
router.delete("/:id", adminAuth(true), controller.deleteCarrito);
router.get("/:id/products", adminAuth(true), controller.getProductsInCarrito);
router.post("/:id/products", adminAuth(true), controller.saveProductInCarrito);
router.delete(
    "/:id/products/:id_prod",
    adminAuth(true),
    controller.deleteProductInCarrito
);

module.exports = router;