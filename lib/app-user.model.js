const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const model = sequelize.define('app_user', {
        user: Sequelize.STRING,
        pass: Sequelize.STRING
    },
    {
        timestamps: false,
    });

    return {
        findOne: (query) => {
            if (query.pass) query.pass = new Buffer(query.pass).toString('base64');

            return model.findOne({ where: query });
        },
    };
};
