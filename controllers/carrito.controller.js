const Container = require("../models/Container");
const contenedor = new Container("src/db/products.json");

const Carrito = require("../models/Carrito");
const carrito = new Carrito("src/db/carrito.json");

const controller = {};

controller.newCarrito = async (req, res) => {
    const data = await carrito.newCarrito();
    res.status(200).json({
        date: `${data.timestamp}`,
        message: "Ha sido creado un nuevo carrito",
        id: `${data.id}`,
    });
};

controller.deleteCarrito = async (req, res) => {
    const data = await carrito.deleteCarritoById(req.params.id);
    data
        ?
        res.status(200).json({
            message: `El carrito ha sido eliminado`,
            "carrito eliminado": `${req.params.id}`,
        }) :
        res
        .status(404)
        .json({
            message: "El carrito no existe"
        });
};

controller.getProductsInCarrito = async (req, res) => {
    const data = await carrito.getCarritoById(req.params.id);
    if (data === null) {
        res
            .status(200)
            .json({
                error: "Not found",
                message: "No se encontró el carrito"
            });
    } else if (data.products.length > 0) {
        res.status(200).json({
            message: "Productos del carrito obtenidos",
            "carrito id": data.id,
            products: data.products,
        });
    } else {
        res.status(200).json({
            message: "Not found",
            "carrito id": data.id,
            products: "El carrito no tiene productos",
        });
    }
};

controller.saveProductInCarrito = async (req, res) => {
    const productToAdd = await contenedor.getById(req.body.id);

    const data = await carrito.addProductToCarrito(req.params.id, productToAdd);

    data != null ?
        res.status(200).json({
            message: "Se añadió un producto al carrito",
            "products in carrito": data,
        }) :
        res.status(200).json({
            error: "No se puede añadir el producto",
            message: "El carrito no existe",
        });
};

controller.deleteProductInCarrito = async (req, res) => {
    const {
        id,
        id_prod
    } = req.params;
    const data = await carrito.deleteProductInCarritoById(id, id_prod);
    console.log(data, "data 63 producto eliminado");
    data != undefined ?
        res.status(200).json({
            message: `Se ha eliminado el producto ${data.title} del carrito ${id}`,
        }) :
        res.status(200).json({
            error: "No existe el producto en el carrito"
        });
};

module.exports = controller;