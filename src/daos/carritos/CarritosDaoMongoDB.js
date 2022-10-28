const ContenedorMongoDB = require('../../contenedores/ContenedorMongoDB')

class CarritosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        const uri = 'mongodb+srv://cvarela:never123@cluster0.hz9hxot.mongodb.net/?retryWrites=true&w=majority'
        super(uri, 'ecommerce', 'carritos')
    }
}

module.exports = CarritosDaoMongoDB;