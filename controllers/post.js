const { User } = require('../lib/db');


module.exports = async(req, res) => {
    const userToSave = req.body;
    const user = await User.create(userToSave);
    res.send(user);
};
