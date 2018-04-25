const { User } = require('../lib/db');


module.exports = async(req, res) => {
    const query = Object.keys(req.query).length ? req.query : req.params;
    console.log(' query ', query);
    const user = await User.findOne(query);
    res.send(user);
};
