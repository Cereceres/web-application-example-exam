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
            .set({ Authorization: `Bearer ${token}` })
            .query({ id: user.id })
            .send({
                username: 'testing put updated',
            })
            .expect(200);
        const userUpdated = await database.User.findOne({ id:user.id });
        assert(userUpdated.username === 'testing put updated');
    });

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
            .expect(401);
    });

    it('should update the user in db is id is send in path params', async() => {
        const data = {
            username: 'testing put',
            birthday: new Date(2016, 0, 1).toString()
        };
        const user = await database.User.create(data);
        await agent
            .put(`/user/${user.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .send({
                username: 'testing put updated',
            })
            .expect(200);
        const userUpdated = await database.User.findOne({ id:user.id });
        assert(userUpdated.username === 'testing put updated');
    });

    it('should update the user in db is id is send in path params', async() => {
        await agent
            .put('/user')
            .set({ Authorization: `Bearer ${token}` })
            .expect(400);
    });
});
