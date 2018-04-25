const database = require('../lib/db');
const assert = require('assert');

describe('Test to post service', () => {
    it('should create the user in db', async() => {
        await agent
            .post('/user')
            .send({
                username: 'testing',
                birthday: Date.UTC(2016, 0, 1).toString()
            })
            .expect(200);
        const userInDb = await database.User.findOne({ username: 'testing' });
        assert(userInDb);
    });
});
