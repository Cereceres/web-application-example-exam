const assert = require('assert');

const database = require('../lib/db');

describe('Test to get service', () => {
    it('should return the user saved', async() => {
        const data = {
            username: 'testing get',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        const res = await agent
            .get('/user')
            .set({ Authorization: `Bearer ${token}` })
            .query({ id: user.id })
            .expect(200);

        assert(res.body.id === user.id);
    });

    it('should return 401 is token is not send', async() => {
        const data = {
            username: 'testing get',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        await agent
            .get('/user')
            .query({ id: user.id })
            .expect(401);
    });

    it('should return the user saved if url param is given', async() => {
        const data = {
            username: 'testing get',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        const res = await agent
            .get(`/user/${user.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        assert(res.body.id === user.id);
    });

    it('should return 400 is query and id is not given', async() => {
        await agent
            .get('/user')
            .set({ Authorization: `Bearer ${token}` })
            .expect(400);
    });
});
