const Sequelize = require("sequelize");
const fs = require("fs");
const path = require('path');

class Postgres {
    constructor(modelsPath) {
        this.postgres = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {logging: false});
        this.__loadModels(path.resolve(modelsPath));
        this.models = {};
    }

    /**
     * initializing models
     * @param modelsPath STRING
     * @private
     */
    __loadModels(modelsPath) {
        const files = fs.readdirSync(modelsPath);
        const modelDefiners = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (path.extname(file) === ".js") {
                const model = require(path.join(modelsPath,file) );
                modelDefiners.push(model);
            }
        }
        for (const modelDefiner of modelDefiners) {
            modelDefiner(this.postgres);
        }
    }

    /**
     * check database connectivity
     * @returns {Promise<boolean>}
     */
    async isConnected(){
        try {
            await this.postgres.authenticate();
            return true;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            return false;
        }
    }

    /**
     * sync the tables
     * @returns {Promise<boolean>}
     */
    async sync(){
        try{
            await this.postgres.sync({ force: true });
            return true;
        }catch (e){
            console.error(e);
            return false;
        }
    }

    /**
     * clear the table
     * @returns {Promise<boolean>}
     */
    async clearTable(tableName){
        try{
            await this.postgres.models[tableName].destroy({where:{}});
            return true;
        }catch (e){
            console.error(e);
            return false;
        }
    }

    async countData(){
        try{
            return await this.postgres.models.reports.count({});
        }catch (e) {
            console.error("table not exist or something happened");
            return false;
        }
    }
}

module.exports = Postgres;