const database = require('../lib/db');
const supertest = require('supertest');

const server = require('../index');
before(async() => {
    await server.startApp();
    global.agent = supertest(server.app);
});


after(async() => {
    await database.User.remove({});
});

