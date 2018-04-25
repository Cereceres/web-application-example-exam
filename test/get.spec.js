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
            .query({ id: user.id })
            .expect(200);

        assert(res.body.id === user.id);
    });
});
