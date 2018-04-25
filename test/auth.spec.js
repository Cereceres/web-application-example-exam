const assert = require('assert');

describe('Test to get service', () => {
    it('should return the user saved', async() => {
        const data = {
            user: 'test',
            pass: 'test'
        };
        const res = await agent
            .get('/auth')
            .send(data)
            .expect(200);
        const { body:{ token } } = res;
        assert(token);
    });

    it('should return 400 if pass and user is not given', async() => {
        await agent
            .get('/auth')
            .expect(400);
    });
});
