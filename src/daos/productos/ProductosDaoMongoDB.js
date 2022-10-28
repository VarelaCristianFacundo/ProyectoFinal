const ContenedorMongoDB = require('../../contenedores/ContenedorMongoDB')

class ProductosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        const uri = 'mongodb+srv://cvarela:never123@cluster0.hz9hxot.mongodb.net/?retryWrites=true&w=majority'
        super(uri, 'ecommerce', 'productos')
    }
}

module.exports = ProductosDaoMongoDB;