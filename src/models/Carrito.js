const fs = require("fs");

class Carrito {
    constructor(file) {
        this.file = file;
        this.products = [];
        this.date = new Date().toLocaleString()
    }

    async newCarrito() {
        try {
            const dataToParse = await fs.promises.readFile(this.file, "utf-8");
            const dataParsed = JSON.parse(dataToParse);
            const newCarrito = {
                id: dataParsed.length + 1,
                timestamp: this.date,
                products: this.products,
                total: 0,
            };
            dataParsed.push(newCarrito);
            const updatedFile = JSON.stringify(dataParsed, null, " ");
            fs.promises.writeFile(this.file, updatedFile);
            return newCarrito;
        } catch (error) {
            console.error(`Se produjo un error en newCarrito:${error}`);
        }
    }

    async deleteCarritoById(idEntered) {
        try {
            const dataToParse = await fs.promises.readFile(this.file, "utf-8");
            const dataParsed = JSON.parse(dataToParse);
            const leakedCarritoId = dataParsed.filter(({
                id
            }) => id != idEntered);
            const carritoFound = dataParsed.find(({
                id
            }) => id == idEntered);

            if (carritoFound) {
                console.log(`Se ha eliminado el carrito con id:${idEntered}`);
                const updatedFile = JSON.stringify(leakedCarritoId, null, " ");

                fs.promises.writeFile(this.file, updatedFile);
                return carritoFound;
            } else {
                console.log(`No se ha encontrado el carrito con id: ${idEntered}`);
            }
        } catch (error) {
            console.error(`Se ha producido un error en deleteCarritoById: ${error}`);
        }
    }

    async getCarritoById(idEntered) {

        try {
            const dataToParse = await fs.promises.readFile(this.file, "utf-8");
            const dataParsed = JSON.parse(dataToParse);
            const carritoFound = dataParsed.find(({
                id
            }) => id == idEntered);

            if (carritoFound) {
                console.log(`Se obtuvo el carrito ${idEntered}`);
                return carritoFound;
            } else {
                console.log(`No se ha encontrado el carrito ${idEntered}`);
                return null
            }
        } catch (error) {
            console.error(`Se produjo un error en getCarritoById: ${error}`);

        }
    }

    async addProductToCarrito(idEntered, object) {
        try {
            const dataToParse = await fs.promises.readFile(this.file, "utf-8");
            const dataParsed = JSON.parse(dataToParse);
            const leakedCarritoId = dataParsed.filter(({
                id
            }) => id != idEntered);
            const carritoFound = dataParsed.find(({
                id
            }) => id == idEntered);

            if (carritoFound) {
                carritoFound.products.push(object);
                carritoFound.products.sort((a, b) => a.id - b.id);
                leakedCarritoId.push(carritoFound);
                leakedCarritoId.sort((a, b) => a.id - b.id);
                const updatedFile = JSON.stringify(leakedCarritoId, null, " ");
                fs.promises.writeFile(this.file, updatedFile);
                console.log(
                    `Se ha agregado el producto ${object.title} exitosamente al carrito ${idEntered}`
                );
                return carritoFound;
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Se produjo un error en addProductToCarrito:${error}`);
        }
    }

    async deleteProductInCarritoById(idCarrito, idProduct) {
        try {
            const dataToParse = await fs.promises.readFile(this.file, "utf-8");
            const dataParsed = JSON.parse(dataToParse);

            const leakedCarritos = dataParsed.filter(({
                id
            }) => id != idCarrito);
            const carritoFound = dataParsed.find(({
                id
            }) => id == idCarrito);

            const leakedProducts = carritoFound.products.filter(
                ({
                    id
                }) => id != idProduct
            );
            const productFound = carritoFound.products.find(({
                id
            }) => id == idProduct);

            carritoFound.products = leakedProducts;
            carritoFound.products.sort((a, b) => a.id - b.id);
            leakedCarritos.push(carritoFound);
            leakedCarritos.sort((a, b) => a.id - b.id);
            const updatedFile = JSON.stringify(leakedCarritos, null, " ");

            fs.promises.writeFile(this.file, updatedFile);

            return productFound;
        } catch (error) {
            console.error(`Se produjo un error en deleteProductInCarritoById:${error}`);
        }
    }
}

module.exports = Carrito;