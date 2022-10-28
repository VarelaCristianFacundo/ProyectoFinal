const ProductosDaoMongoDB = require('./daos/productos/ProductosDaoMongoDB')
const ProductosDaoFirebase = require('./daos/productos/ProductosDaoFirebase')
const CarritosDaoFirebase = require('./daos/carritos/CarritosDaoFirebase')
const CarritosDaoMongoDB = require('./daos/carritos/CarritosDaoMongoDB')


const ProductosDao = new ProductosDaoFirebase();
const CarritosDao = new CarritosDaoFirebase();

module.exports = {ProductosDao, CarritosDao};