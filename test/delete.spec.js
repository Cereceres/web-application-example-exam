const assert = require('assert');

const database = require('../lib/db');

describe('Test to delete service ', () => {
    it('should update the active property to false is user remove', async() => {
        const data = {
            username: 'testing delete',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        await agent
            .delete('/user')
            .query({ id: user.id })
            .expect(200);
        const userUpdated = await database.User.findOne({ id:user.id });
        assert(userUpdated.active === false);
    });
});
