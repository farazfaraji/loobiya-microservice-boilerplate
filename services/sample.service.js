const di = require("./../di");

async function insertIntoSample(username,email) {
    const reportsModel = ((di.postgres || {}).models || {}).sample || null;
    if (reportsModel) {
        return await reportsModel.create({
            username,
            email
        });
    }
    return false;
}

module.exports = {
    insertIntoSample
}