const express = require('express');
const crypto = require('crypto');
const redis = require('redis')

const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const client = redis.createClient()

client.connect()

// 401, wrong password
// 400, general error
router.post('/login', async (req, res) => {
    try {
        const userInfo = JSON.parse(await client.hGet('user_info', req.body.email))

        const hash = crypto.createHash('sha256');
        hash.update(req.body.password);
        const hashPassword = hash.digest('hex');

        if(userInfo.password != hashPassword) {
            res.status(401).send()
            return
        }

        userInfo.currentlyUsedUserId = uuidv4()

        await client.hSet('user_info', req.body.email, JSON.stringify(userInfo))
        await client.hSet('user_id', userInfo.currentlyUsedUserId, req.body.email)

        res.status(200).json({userId: userInfo.currentlyUsedUserId}).send();
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

// 409, email already exists
// 400, bad request
router.post('/register', async (req, res) => {
    try {        
        const hash = crypto.createHash('sha256');
        hash.update(req.body.password);
        const hashedData = hash.digest('hex');

        const userInfo = {
            email: req.body.email,
            fullName: req.body.fullName,
            password: hashedData,
            currentlyUsedUserId: null
        };
        
        const userExists = await client.hGet('user_info', req.body.email)
        console.log(userExists)

        if(userExists != null) {
            res.status(409).send()
            return
        }

        await client.hSet('user_info', req.body.email, JSON.stringify(userInfo))

        res.status(200).send();
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

module.exports = router;
