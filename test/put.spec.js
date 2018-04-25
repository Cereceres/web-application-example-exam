const assert = require('assert');

const database = require('../lib/db');

describe('Test to put service ', () => {
    it('should update the user in db', async() => {
        const data = {
            username: 'testing put',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        await agent
            .put('/user')
            .query({ id: user.id })
            .send({
                username: 'testing put updated',
            })
            .expect(200);
        const userUpdated = await database.User.findOne({ id:user.id });
        assert(userUpdated.username === 'testing put updated');
    });
});
