const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");
const {
    FieldValue
} = require("firebase-admin/firestore");

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor() {
        super("carritos");
    }

    async deleteCartItem(cartId, itemId) {
        try {
            const ref = this.query.doc(cartId);
            const doc = await ref.get();
            const itemToDelete = doc
                .data()
                .productos.find((producto) => producto.id === itemId);

            if (!itemToDelete) return new Error("Item does not exist");
            else {
                return await ref.update({
                    productos: FieldValue.arrayRemove(itemToDelete),
                });
            }
        } catch (error) {
            throw error;
        }
    }

    async addCartItem(cartId, item) {
        try {
            const doc = this.query.doc(cartId);
            return await doc.update({
                productos: FieldValue.arrayUnion(item),
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarritosDaoFirebase;