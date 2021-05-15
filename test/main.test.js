const dotenv = require('dotenv');
const fs = require("fs");
const di = require("./../di");
const sampleService = require("./../services/sample.service");

if(fs.existsSync(__dirname + "/.env"))
    dotenv.config({path:__dirname + "/.env"});
else
    dotenv.config();

beforeAll(async (done) => {
    await di.load();
    done()
})
describe('Test Business Layer', () => {
    it('check database connection', async () => {
        const res = await di.postgres.isConnected();
        expect(res).toBe(true);
    });
    it('sync database', async () => {
        const res = await di.postgres.sync();
        expect(res).toBe(true);
    });

    it('clear database', async () => {
        const res = await di.postgres.clearTable('sample');
        expect(res).toBe(true);
    });

    it('insert first sample', async () => {
        const res = await sampleService.insertIntoSample("faraz","faraz.faraji@gmail.com");
        expect(res.data).toBe(10);
    });

    it('check data', async () => {
        const res = await sampleService.getAllData();
        expect(res.length).toBe(1);
    });

    it('clear database', async () => {
        const res = await di.postgres.clearTable();
        expect(res).toBe(true);
    });
})