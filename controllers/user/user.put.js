const { User } = require('../../lib/db');


module.exports = async(req, res) => {
    const query = Object.keys(req.query).length ? req.query : req.params;
    const userToUpdate = req.body;
    const user = await User.update(query, userToUpdate);
    res.send(user);
};

