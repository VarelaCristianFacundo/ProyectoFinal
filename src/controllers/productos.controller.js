const Product = require("../models/Product");
const {
    ProductosDao
} = require("../app");

const productsController = {};

productsController.getAll = async (req, res, next) => {
    try {
        const products = await ProductosDao.getAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
};
productsController.addNew = async (req, res, next) => {
    const data = new Product(req.body);
    try {
        res.json(await ProductosDao.addItem(data));
    } catch (error) {
        next(error);
    }
};
productsController.getById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const data = await ProductosDao.getById(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
};
productsController.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await ProductosDao.deleteItem(id));
    } catch (error) {
        next(error);
    }
};
productsController.updateById = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.json(await ProductosDao.updateItem(id, data));
    } catch (error) {
        next(error);
    }
};

module.exports = productsController;