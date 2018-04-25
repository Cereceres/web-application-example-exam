const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const model = sequelize.define('user', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE,
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return {
        findOne: (query) => model.findOne({ where: query }),
        update: (query, data) => model.update(data, { where: query }),
        remove: (query) => model.destroy({ where: query }),
        create: (data) => model.create(data)
    };
};
