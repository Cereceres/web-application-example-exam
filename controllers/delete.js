const { User } = require('../lib/db');

module.exports = async(req, res) => {
    const query = req.query || req.params;
    await User.update(query, { active:false });
    res.send({ response:'ok' });
};
