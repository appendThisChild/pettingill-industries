const express = require('express')
const router = express.Router()
const ContactMessage = require('../models/contactMessage.js')

router.route('/')
    .post((req, res, next) => {
        const newContactMessage = new ContactMessage(req.body)
        newContactMessage.save((err, newContactMessage) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send("Successful")
        })
    })

module.exports = router;