const { User } = require('../lib/db');


module.exports = async(req, res) => {
    const query = req.query || req.params || {};
    const userToUpdate = req.body;
    const user = await User.update(query, userToUpdate);
    res.send(user);
};

