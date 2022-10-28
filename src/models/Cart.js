class Cart {
    constructor(productos){
        this.timestamp = Date.now()
        this.productos = productos
    }
}

module.exports = Cart;