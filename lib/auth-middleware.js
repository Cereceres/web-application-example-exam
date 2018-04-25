const jwt = require('express-jwt');
const unless = require('express-unless');
const { jwt:{ secret } } = require('../settings');

const middleware = jwt({ secret });

middleware.unless = unless;

module.exports = () => middleware.unless({ path:'/auth' });
