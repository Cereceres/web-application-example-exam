const Sequelize = require('sequelize');
const getUser = require('./user.model');

const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST: host = 'localhost',
    DB_PROVIDER: dialect = 'mysql'
} = process.env;
const options = {
    host,
    dialect
};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, options);
const User = getUser(sequelize);

module.exports = {
    connect: () => sequelize.sync({ force: false }),
    User:{
        findOne: (query) => User.findOne({ where: query }),
        update: (query, data) => User.update(data, { where: query }),
        remove: (query) => User.destroy({ where: query }),
        create: (data) => User.create(data)
    }
};

