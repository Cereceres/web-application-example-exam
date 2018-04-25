const Sequelize = require('sequelize');

module.exports = (sequelize) => sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});
