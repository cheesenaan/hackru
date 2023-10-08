const express = require('express');
const crypto = require('crypto');
const redis = require('redis')

const client = redis.createClient()
client.connect()

const validateUserId = (req, res, next) => {
    const userId = req.headers["user-id"];

    if (userId == null || !isValidUserId(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    req.userId = userId;

    next();
};

const isValidUserId = (userId) => {
    try {
        const realUserId = client.hGet('user_id', userId);
        
        return realUserId != null && realUserId == userId
      } catch (err) {

        console.error(err);
        return false
      }
};

// 401, wrong password
// 400, general error
router.post('/submitFormData', validateUserId, async (req, res) => {
    try {

        res.status(200).send();
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
            password: hashedData
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

module.exports = [router, validateUserId];
