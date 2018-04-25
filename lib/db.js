const Sequelize = require('sequelize');

const getUser = require('./user.model');
const getAppUser = require('./app-user.model');

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
const AppUser = getAppUser(sequelize);

module.exports = {
    connect: () => sequelize.sync({ force: false }),
    User,
    AppUser

};

