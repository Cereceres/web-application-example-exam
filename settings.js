module.exports = {
    jwt:{
        secret: process.env.JWT_SECRET || '3450th+q490jtf92340[{',
        expiresIn: process.env.EXPIRES_IN || 3600
    }
};
