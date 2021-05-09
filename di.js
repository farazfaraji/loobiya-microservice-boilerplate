const Postgres = require("./services/postgres.service");
class DI{
    constructor() {
        this.postgres = null;
    }
    async load(){
        this.postgres = new Postgres(__dirname + "/database/models");
    }
}

module.exports = new DI();