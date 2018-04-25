const express = require('express');
const get = require('../controllers/auth/auth.get');
const router = express.Router();

router.post('/auth', get);

module.exports = router;
