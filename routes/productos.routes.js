const {
    Router
} = require("express");
const router = Router();
const controller = require("../controllers/productos.controller");
const {
    completedFields,
    adminAuth
} = require("../middlewares/middlewares");


router.get("/", adminAuth(true), controller.getAll);
router.get("/:id", adminAuth(true), controller.getById);
router.post("/", adminAuth(true), completedFields, controller.post);
router.put("/:id", adminAuth(false), completedFields, controller.put);
router.delete("/:id", adminAuth(false), controller.delete);

module.exports = router;