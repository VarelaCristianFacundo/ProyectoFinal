const ProductosDaoMongoDB = require('./daos/productos/ProductosDaoMongoDB')
const ProductosDaoFirebase = require('./daos/productos/ProductosDaoFirebase')
const CarritosDaoFirebase = require('./daos/carritos/CarritosDaoFirebase')
const CarritosDaoMongoDB = require('./daos/carritos/CarritosDaoMongoDB')

// ACA ELIJO SI UTILIZAR FIREBASE O MONGODB

// const ProductosDao = new ProductosDaoFirebase();
// const CarritosDao = new CarritosDaoFirebase();


const ProductosDao = new ProductosDaoMongoDB();
const CarritosDao = new CarritosDaoMongoDB();

module.exports = {ProductosDao, CarritosDao};