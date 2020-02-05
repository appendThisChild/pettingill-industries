const express = require('express')
const router = express.Router()

const fs = require('fs')
const AWS = require('aws-sdk');
const uuid = require('node-uuid');

const s3 = new AWS.S3();

// const bucketName = 'node-sdk-sample-' + uuid.v4();
const bucketName = "pettingill-industries-gallery";
const keyName = 'hello_world.txt';

router.route('/')
    .post((req, res, next) => {
        console.log("something")

        // s3.listObjects({ Bucket: bucketName }, (err, data) => {
        //     if (err) {
        //         res.status(500)
        //         return next(err)
        //     }
        //     return res.status(201).send(data)
        // })

        // s3.getObjectTorrent({ Bucket: bucketName, Key: "Portfolio/IMG_0360.jpg" }, (err, data) => {
        //     if (err) {
        //         res.status(500)
        //         return 
        //     }
        //     return res.status(201).send(data.Body.toString('base64'))
        // })

        const params = {Bucket: bucketName, Key: "Portfolio/IMG_0360.jpg"};
        s3.getObject(params).createReadStream().setEncoding('base64').pipe(res);
    


        // s3.createBucket({Bucket: bucketName}, () => {
        //     var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
        //     s3.putObject(params, (err, data) => {
        //         if (err) {
        //             res.status(500)
        //             return next(err)
        //         }
        //         return res.status(201).send("Successfully uploaded data to " + bucketName + "/" + keyName);
        //     });
        // });
    })

module.exports = router;