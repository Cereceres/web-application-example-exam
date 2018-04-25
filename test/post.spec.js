const database = require('../lib/db');
const assert = require('assert');

describe('Test to post service', () => {
    it('should create the user in db', async() => {
        await agent
            .post('/user')
            .set({ Authorization: `Bearer ${token}` })
            .send({
                username: 'testing',
                birthday: Date.UTC(2016, 0, 1).toString()
            })
            .expect(200);
        const userInDb = await database.User.findOne({ username: 'testing' });
        assert(userInDb);
    });

    it('should return 401 is token is not send', async() => {
        await agent
            .post('/user')
            .send({
                username: 'testing',
                birthday: Date.UTC(2016, 0, 1).toString()
            })
            .expect(401);
    });

    it('should return 400 is username is not given', async() => {
        await agent
            .post('/user')
            .set({ Authorization: `Bearer ${token}` })
            .send({
                birthday: Date.UTC(2016, 0, 1).toString()
            })
            .expect(400);
    });

    it('should return 400 if birthday is not given', async() => {
        await agent
            .post('/user')
            .set({ Authorization: `Bearer ${token}` })
            .send({
                username: 'testing',
            })
            .expect(400);
    });
});
