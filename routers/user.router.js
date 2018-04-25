const express = require('express');
const joiValidator = require('express-joi-validation');
const joi = require('joi');

const post = require('../controllers/post');
const remove = require('../controllers/delete');
const put = require('../controllers/put');
const get = require('../controllers/get');

const router = express.Router();
const validator = joiValidator({});

router.get('/user/:id?',
    validator.params(
        joi
            .object()
            .keys({
                id: joi.string()
            })
    ),
    validator.query(
        joi
            .object()
            .pattern(/.*/, joi.any())
            .min(1)
    ),
    get);
router.put('/user/:id?',
    validator.body(
        joi
            .object()
            .keys({
                username: joi.string(),
                birthday: joi.date().max(new Date().toString())
            })
    ),
    validator.params(
        joi
            .object()
            .keys({
                id: joi.string()
            })
    ),
    validator.query(
        joi
            .object()
            .pattern(/.*/, joi.any())
            .min(1)
    ),
    put);
router.delete('/user/:id?',
    validator.params(
        joi
            .object()
            .keys({
                id: joi.string()
            })
    ),
    validator.query(
        joi
            .object()
            .pattern(/.*/, joi.any())
            .min(1)
    ), remove);
router.post('/user',
    validator.body(
        joi
            .object()
            .keys({
                username: joi.string().required(),
                birthday: joi.date().max(new Date().toString()).required()
            })
    ),
    post);


module.exports = router;
