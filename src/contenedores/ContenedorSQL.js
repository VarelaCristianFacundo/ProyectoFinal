const Knex = require("knex").default;

class Contenedor {
    constructor(table, options) {
        this.table = table;
        this.knex = Knex(options);
    }

    async getAll() {
        try {
            const data = await this.knex.from(this.table).select("*");
            return data;
        } catch (error) {
            throw error;
        }
        /* finally {
             this.knex.destroy();
           } */
    }
    async getById(id) {
        try {
            const data = await this.knex
                .from(this.table)
                .select("*")
                .where("id", "=", id);
            return data;
        } catch (error) {
            throw error;
        }
        /* finally {
             this.knex.destroy();
           } */
    }
    async addItem(data) {
        try {
            await this.knex(this.table).insert(data);
        } catch (error) {
            throw error;
        }
        /* finally {
             this.knex.destroy();
           } */
    }
    async updateItem(id, data) {
        try {
            await this.knex(this.table).where("id", "=", id).update(data);
        } catch (error) {
            throw error;
        }
        /* finally {
             this.knex.destroy();
           } */
    }
    async deleteItem(id) {
        try {
            await this.knex(this.table).where("id", "=", id).del();
        } catch (error) {
            throw error;
        }
        /* finally {
             this.knex.destroy();
           } */
    }
}

module.exports = Contenedor;