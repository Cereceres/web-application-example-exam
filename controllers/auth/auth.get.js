const { AppUser } = require('../../lib/db');
const jwt = require('jsonwebtoken');

const { jwt:{ secret, expiresIn } } = require('../../settings');
module.exports = async(req, res) => {
    const { user, pass } = req.body;
    console.log('user, pass ', user, pass);
    const userSaved = await AppUser.findOne({ user });
    console.log('userSaved ', userSaved.toJSON());

    if (!userSaved) return res
        .status(404)
        .send();
    console.log(' is igual', pass, userSaved.pass, pass == userSaved.pass);
    if (new Buffer(pass).toString('base64') !== userSaved.pass) return res
        .status(400)
        .send();

    const token = jwt.sign({ data:user }, secret, { expiresIn });
    console.log('token ', token);
    res.json({ token });
};
