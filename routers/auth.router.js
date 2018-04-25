const express = require('express');
const get = require('../controllers/auth/auth.get');
const joiValidator = require('express-joi-validation');
const joi = require('joi');

const validator = joiValidator({});
const router = express.Router();

router.get('/auth',
    validator
        .body(
            joi
                .object()
                .keys({
                    pass: joi.string().required(),
                    user: joi.string().required(),
                })
        ),
    get);

module.exports = router;
