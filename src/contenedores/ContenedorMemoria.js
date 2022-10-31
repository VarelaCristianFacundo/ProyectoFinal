class ContenedorMemoria {
    constructor() {
        this.data = [];
    }
    getAll() {
        return this.data;
    }
    getNextId(items) {
        const nextId = items[items.length - 1].id + 1;
        return nextId;
    }
    getById(id) {
        const item = this.data.find((element) => element.id === id);
        if (!item) {
            const error = new Error("item no encontrado");
            throw error;
        }
        return item;
    }
    addItem(item) {
        item.id = this.getNextId(this.data);
        this.data.push(item);
    }
    updateItem(id, newData) {
        const item = this.getById(id);
        for (let i in item) {
            if (i !== "id") item[i] = newData[i];
        }
    }
    deleteItem(id) {
        this.data.filter((item) => item.id !== id);
    }
}

module.exports = ContenedorMemoria;