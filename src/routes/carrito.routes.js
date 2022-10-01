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
router.get("/:id/productos", adminAuth(true), controller.getProductosInCarrito);
router.post("/:id/productos", adminAuth(true), controller.saveProductInCarrito);
router.delete(
    "/:id/productos/:id_prod",
    adminAuth(true),
    controller.deleteProductInCarrito
);

module.exports = router;