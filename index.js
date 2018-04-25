const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('./lib/auth-middleware');
const database = require('./lib/db');
const userRouter = require('./routers/user.router');
const userAuth = require('./routers/auth.router');
const app = express();
const { PORT: port = 3000 } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt());
app.use('/', userRouter);
app.use('/', userAuth);
const server = module.exports = {
    app,
    startApp : async() => {
        await database.connect();
        app.listen(port, () => console.log(`server is init in port ${ port }`));
        return server;
    }
};

if (!module.parent) server.startApp();
