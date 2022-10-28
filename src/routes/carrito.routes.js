const {Router} = require('express')
const cartsController = require('../controllers/carrito.controller')

const cartRouter = Router()

cartRouter.get('/:id/productos', cartsController.getById)

cartRouter.post('/', cartsController.addNew)

cartRouter.post('/:id/productos', cartsController.addProduct)

cartRouter.delete('/:id', cartsController.deleteById)

cartRouter.delete('/:id/productos/:id_prod',cartsController.deleteProduct)


module.exports = cartRouter;