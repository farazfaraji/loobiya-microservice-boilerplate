const express = require('express');
const router = express.Router();
const {body, check, validationResult} = require('express-validator');
const sampleService = require("./../services/sample.service");


router.post('/new', body("username").notEmpty(), body("email").isEmail(), async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error(`${errors.array()[0].msg} ${errors.array()[0].param}`)
        return res.status(400).json({status: false, message: `${errors.array()[0].msg}, check ${errors.array()[0].param}`});
    }
    try{
        await sampleService.insertIntoSample(
            req.body.username,
            req.body.email,
        )
        return res.status(200).send({status: true, message: "done"});
    }catch (e) {
        return res.status(400).json({status: false, message: `${e}`});
    }
});

module.exports = router;