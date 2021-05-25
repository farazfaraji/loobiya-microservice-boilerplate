const di = require("./../di");

async function insertIntoSample(username,email) {
    const reportsModel = di.postgres.postgres.models.sample || null;
    if (reportsModel) {
        return await reportsModel. create({
            username,
            email
        });
    }
    return false;
}

async function getAllData() {
    const reportsModel = di.postgres.postgres.models.sample || null;
    if (reportsModel) {
        return await reportsModel.findAll({where:{}});
    }
    return false;
}

module.exports = {
    insertIntoSample,
    getAllData
}