const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'jedel..', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});
module.exports = {
    connect: () => sequelize.sync({ force: false }),
    User:{
        findOne: (query) => User.findOne({ where: query }),
        update: (query, data) => User.update(data, { where: query }),
        remove: (query) => User.destroy({ where: query }),
        create: (data) => User.create(data)
    }
};

