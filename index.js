const express = require('express');
const bodyParser = require('body-parser');

const database = require('./lib/db');
const router = require('./routers/user.router');

const app = express();
const { PORT: port = 3000 } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
console.log('addres ', app.address);
module.exports = {
    app,
    startApp : async() => {
        await database.connect();
        app.listen(port, () => console.log('server is init'));
        console.log('addres ', app.address);
        return app;
    }
};
