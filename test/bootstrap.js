const database = require('../lib/db');
const supertest = require('supertest');

const server = require('../index');
before(async() => {
    await server.startApp();
    global.agent = supertest(server.app);
    const data = {
        user: 'test',
        pass: 'test'
    };
    const res = await agent
        .get('/auth')
        .send(data)
        .expect(200);
    const { body:{ token } } = res;
    global.token = token;
});


after(async() => {
    await database.User.remove({});
});

