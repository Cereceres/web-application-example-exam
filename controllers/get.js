const { User } = require('../lib/db');


module.exports = async(req, res) => {
    const query = req.query || req.params || {};
    const user = await User.findOne(query);
    res.send(user);
};
